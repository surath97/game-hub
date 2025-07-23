import { Box, Flex, Image, Text } from "@chakra-ui/react";
import type { short_screenshots } from "../entities/Game";
import { useEffect, useState } from "react";
import getCroppedImageURL from "../services/image-url";
import { useHoverStore } from "../store";

interface Props {
  screenshots: short_screenshots[];
  game_id: number;
}

const Carousel = ({ screenshots, game_id }: Props) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const hoverState = useHoverStore();

  
  // Auto-switch slides when hovering
  useEffect(() => {

    let interval: number | undefined;

    if (hoverState.hover && (game_id === hoverState.hover.game_id)) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % screenshots.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      position="relative"
    >
      <Box overflow="hidden" boxShadow="lg">
        <Flex
          transition="transform 0.5s ease-in-out"
          transform={`translateX(-${currentSlide * 100}%)`}
        >
          {screenshots.map((slide, index) => (
            <Box
              key={index}
              minW="100%"
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              bg="gray.100"
            >
              <Image
                src={getCroppedImageURL(slide.image)}
                objectFit="cover"
                w="auto"
                h="auto"
              />
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Dots for slide indication */}
      <Flex justify="center" mt={4} className="opacity-75">
        {screenshots.map((_, index) => (
          <Box
            key={index}
            w={4}
            h={2}
            mx={1}
            borderRadius="full"
            bg={currentSlide === index ? "purple.700" : "gray.300"}
            cursor="pointer"
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
