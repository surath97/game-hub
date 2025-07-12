import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { ParentPlatform } from "../entities/ParentPlatform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<ParentPlatform>('/platforms/lists/parents');

// const usePlatforms = () => useData<ParentPlatform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
  });

export default usePlatforms;
