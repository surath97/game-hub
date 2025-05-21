import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count : number;
  results : Game [];
}

function GameGrid() {

  const [games, setGames] = useState<Game []>([]);
  const [error, setError] = useState('');

  useEffect(() => {

    apiClient.get<FetchGames>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))

  })

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid;