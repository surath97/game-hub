import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

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
  metacritic: number
}

interface FetchGames {
  count : number;
  results : Game [];
}

const useGames = () => {

  const [games, setGames] = useState<Game []>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  
  useEffect(() => {
    
    const gameController = new AbortController();
    let isActive = true;

    setLoading(true);

    apiClient.get<FetchGames>('/games', { signal: gameController.signal })
      .then(res => {
        if (isActive) {
          setGames(res.data.results);
        }
      })
      .catch(err => {
        if(!axios.isCancel && isActive)
        setError(err.message);
      })
      .finally(() => {
        if (isActive) {
          setLoading(false);
        }
      })

    return () => {
      isActive = false;
      gameController.abort();
    }

  }, [])

  return { games, error, isLoading };

}

export default useGames;