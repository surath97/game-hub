import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {

  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if(isLoading) return <Spinner />

  if(error) throw error;

  return (
    <>
      <Heading size="4xl">{ game?.name }</Heading>
      <ExpandableText children={ game?.description_raw! } />
    </>
  )

}

export default GameDetailPage;