import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient, { type FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number | null;
  rating_top: number;
}


const apiClient = new APIClient<Game>('/games');


const useGames = (gameQuery: GameQuery) =>

  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        }
    }),

    staleTime: 2 * 1000 * 60
  });

export default useGames;
