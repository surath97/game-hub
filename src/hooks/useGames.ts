import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGames {
  count : number;
  results : Game [];
}

const useGames = () => {

  const [games, setGames] = useState<Game []>([]);
  const [error, setError] = useState('');

  
  useEffect(() => {
    
    const gameController = new AbortController();

    apiClient.get<FetchGames>('/games', { signal: gameController.signal })
      .then(res => setGames(res.data.results))
      .catch(err => {
        if(!axios.isCancel)
        setError(err.message);
      })

    return () => gameController.abort();

  }, [])

  return { games, error };

}

export default useGames;