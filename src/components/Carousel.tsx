import { Box, Flex, Image, Text } from "@chakra-ui/react";
import type { short_screenshots } from "../entities/Game";
import { useEffect, useState } from "react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  screenshots: short_screenshots[];
}

const Carousel = ({ screenshots }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  
  // Auto-switch slides when hovering
  useEffect(() => {

    let interval: number | undefined;

    if (isHovering) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % screenshots.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isHovering, screenshots.length]);


  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
      <Flex justify="center" mt={4}>
        {screenshots.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
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
