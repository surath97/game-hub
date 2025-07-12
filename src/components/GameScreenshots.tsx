import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props ) => {

  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if(error) throw error;

   if(!data?.results[0]) return null;

  return (
    <SimpleGrid columns={{ base: 1 , md: 2 }} gap={2}>
      { data?.results.map((ss) => <Image key={ss.id} src={ss.image} />)}
    </SimpleGrid>
  )

}

export default GameScreenshots;