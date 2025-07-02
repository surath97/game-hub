import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<ParentPlatform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<ParentPlatform>>("/platforms/lists/parents")
        .then((res) => res.data),

    staleTime: 1 * 1000 * 60 * 60 * 24
  });

export default usePlatforms;
