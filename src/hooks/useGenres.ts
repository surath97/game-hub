import { useQuery } from "@tanstack/react-query";
import useData, { type FetchResponse } from "./useData";
import apiClient from "../services/api-client";


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient
                  .get<FetchResponse<Genre>>('/genres')
                  .then((res) => res.data),

  staleTime: 1 * 1000 * 60 * 60 * 24
})

export default useGenres;