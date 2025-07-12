
export interface Game {
  id: number;
  name: string;
  slug: string;
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
