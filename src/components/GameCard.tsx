import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({game}: Props) {

  return (
    <Card.Root>
      <Image src={getCroppedImageURL(game.background_image)} />
      <Card.Body>
        <HStack justifyContent='space-between' marginBottom='10px'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  )

}

export default GameCard;