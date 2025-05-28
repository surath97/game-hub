import { Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  clickedGenre: Genre | null;
}

function GenreList({ onSelectGenre, clickedGenre }: Props) {

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
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack

              // ------------------ onHover
              transition="400ms"
              _hover={{
                textDecoration: "underline",
                fontWeight: "semibold",
                scale: "110%",
                translate: "15px",
              }}

              // ------------------ onclicked
              fontWeight={genre.id === clickedGenre?.id ? "semibold" : "normal"}
              scale={genre.id === clickedGenre?.id ? "120%" : "100%"}
              translate={genre.id === clickedGenre?.id ? "25px" : "0px"}

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
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
