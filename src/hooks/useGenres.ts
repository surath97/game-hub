import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient from "../services/api-client";


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => useData<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,

  staleTime: ms('24h')
})

export default useGenres;