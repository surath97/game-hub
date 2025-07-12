import type { Genre } from "./Genre";
import type { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number | null;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
