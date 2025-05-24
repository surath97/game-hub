import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";


export interface Genre {
  id: number;
  name: string;
}

interface FetchGenre {
  count : number;
  results : Genre [];
}

const useGenres = () => {

  const [genre, setGenre] = useState<Genre []>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  
  useEffect(() => {
    
    const genreController = new AbortController();
    let isActive = true;

    setLoading(true);

    apiClient.get<FetchGenre>('/genres', { signal: genreController.signal })
      .then(res => {
        if (isActive) {
          setGenre(res.data.results);
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
      genreController.abort();
    }

  }, [])

  return { genre, error, isLoading };

}

export default useGenres;