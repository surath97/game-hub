import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { type FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string
  parent_platforms: { platform: Platform }[];
  metacritic: number | null;
  rating_top: number;
}

// undefined: The absence of a value
// null:      The intenational absence of a value --> unselect

const apiClient = new APIClient<Game>('/games');


const useGames = () =>{
  
  const gameQuery = useGameQueryStore(s => s.gameQuery); 

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
    }),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      
      return lastPage.next ? (allPages.length + 1) : undefined ;
    },

    staleTime: ms('24h')
  });


}

export default useGames;
