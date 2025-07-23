import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { Game } from "../entities/Game";
import getCroppedImageURL from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { useState } from "react";
import Carousel from "./Carousel";

interface Props {
  game: Game;
}

function GameCard({game}: Props) {

  const [is_m_over, setIs_m_over] = useState(false)

  return (
    <Card.Root variant='elevated' onMouseOver={() => {setIs_m_over(true)}} onMouseOut={() => {setIs_m_over(false)}}>

      { (is_m_over) ? 
        <Carousel screenshots={game.short_screenshots} /> :
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