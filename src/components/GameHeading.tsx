import { Heading } from "@chakra-ui/react";
import useSingleGenre from "../hooks/useSingleGenre";
import useSinglePlatform from "../hooks/useSinglePlatform";
import useGameQueryStore from "../store";


function GameHeading() {

  const genreId    = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);

  const genre     = useSingleGenre(genreId);
  const plat_form = useSinglePlatform(platformId);

  const heading = `${plat_form?.name || ''} ${genre?.name || ''} Games`;
  
  return (
    <Heading marginY={5} size='5xl'>{heading}</Heading>
  )
}

export default GameHeading;