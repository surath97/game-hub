import useData from "./useData";
import type { Genre } from "./useGenres";
import type { ParentPlatform } from "./usePlatforms";

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
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: ParentPlatform | null) =>
  useData<Game>("/games", 
    {
      params: {
        genres            : selectedGenre?.id,
        parent_platforms  : selectedPlatform?.id
      }
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
