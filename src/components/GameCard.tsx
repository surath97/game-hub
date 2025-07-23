import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { Game } from "../entities/Game";
import getCroppedImageURL from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { useState } from "react";
import Carousel from "./Carousel";
import { useHoverStore } from "../store";

interface Props {
  game: Game;
}

function GameCard({game}: Props) {

  const hoverStore = useHoverStore();

  return (
    <Card.Root variant='elevated' onMouseOver={() => {hoverStore.setHover(true, game.id)}} onMouseOut={() => {hoverStore.setHover(false, game.id)}}>

      { (hoverStore.hover && game.id === hoverStore.hover.game_id && game.background_image) ? 
        <Carousel screenshots={game.short_screenshots} game_id={game.id} /> :
        <Image src={getCroppedImageURL(game.background_image)} />
      }

      <Card.Body>
        <HStack justifyContent='space-between' marginBottom='10px'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  )

}

export default GameCard;