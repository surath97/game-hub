import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { type AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count : number;
  results : T [];
}

const useData = <T>(endpoint: string, requstConfig?: AxiosRequestConfig, deps?: any[]) => {

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
  
    const dataController = new AbortController();
    let isActive = true;

    setLoading(true);

    apiClient.get<FetchResponse<T>>(endpoint, { signal: dataController.signal, ...requstConfig })
    .then(res => {
      if (isActive) {
        setData(res.data.results);
      }
    })
    .catch(err => {
      if(!axios.isCancel && isActive)
      setError(err.message);
    })
    .finally(() => {
      if (isActive) {
        setLoading(false);
      }
    })

    return () => {
      isActive = false;
      dataController.abort();
    }

  }, deps ? [...deps] : [])

  return { data, error, isLoading };
}

export default useData;