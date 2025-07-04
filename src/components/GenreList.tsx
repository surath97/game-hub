import { Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  clickedGenreId?: number;
}

function GenreList({ onSelectGenre, clickedGenreId: clickedGenre }: Props) {

  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return null;

  return (
    <>
      <Heading marginBottom={3}>Genres</Heading>
      <List.Root listStyleType="none">
        {/* Skeleton Loading */}
        {isLoading &&
          skeleton.map((sk) => (
            <List.Item key={sk} paddingY="5px">
              <GenreSkeleton key={sk} />
            </List.Item>
          ))}
        {/* Skeleton Loading */}
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack

              // ------------------ onHover
              transition="300ms"
              _hover={{
                textDecoration: "underline",
                fontWeight: "semibold",
                scale: "110%",
                translate: "15px",
              }}

              // ------------------ onclicked
              fontWeight={genre.id === clickedGenre ? "semibold" : "normal"}
              scale={genre.id === clickedGenre ? "120%" : "100%"}
              translate={genre.id === clickedGenre ? "25px" : "0px"}
              borderRadius="4xl"

            >
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
                objectFit="cover"
              />
              <Link
                onClick={() => onSelectGenre(genre)}
                fontSize="md"
                _hover={{ textDecoration: "none" }}
              >
                <Text
                  bgGradient="to-r" 
                  gradientFrom="bg" 
                  gradientTo="bg" 
                  gradientVia={genre.id === clickedGenre ? "purple.muted" : "bg"}
                  paddingY={1}
                >
                  {genre.name}
                </Text>
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
