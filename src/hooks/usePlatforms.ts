import { useQuery } from "@tanstack/react-query";
import ms from "ms";
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
    staleTime: ms('24h')
  });

export default usePlatforms;
