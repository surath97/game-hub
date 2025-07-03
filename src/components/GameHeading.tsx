import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery
}

function GameHeading({gameQuery}: Props) {

  const { data: genres } = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)
  
  const { data: platforms } = usePlatforms();
  const plat_form = platforms?.results.find(p => p.id === gameQuery.platformId)

  const heading = `${plat_form?.name || ''} ${genre?.name || ''} Games`;
  
  return (
    <Heading marginY={5} size='5xl'>{heading}</Heading>
  )
}

export default GameHeading;