import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count : number;
  results : T [];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f0e2db65ebe64fcb9f95135d9c9ee353'
    }
});


class APIClient<T> {

    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }


    getAll = (config: AxiosRequestConfig) => {

        return axiosInstance
            .get<FetchResponse<T>>( this.endpoint, config )
            .then((res) => res.data)
    }
}


export default APIClient;