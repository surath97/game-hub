import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
}


const apiClient = new APIClient<ParentPlatform>('/platforms/lists/parents');

// const usePlatforms = () => useData<ParentPlatform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1 * 1000 * 60 * 60 * 24
  });

export default usePlatforms;
