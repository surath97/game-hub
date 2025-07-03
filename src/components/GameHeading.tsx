import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useSingleGenre from "../hooks/useSingleGenre";
import useSinglePlatform from "../hooks/useSinglePlatform";

interface Props {
  gameQuery: GameQuery
}

function GameHeading({gameQuery}: Props) {

  const genre     = useSingleGenre(gameQuery.genreId);
  const plat_form = useSinglePlatform(gameQuery.platformId);

  const heading = `${plat_form?.name || ''} ${genre?.name || ''} Games`;
  
  return (
    <Heading marginY={5} size='5xl'>{heading}</Heading>
  )
}

export default GameHeading;