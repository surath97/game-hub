import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if(error) return null;

  return (
    <List.Root listStyleType='none'>
      {/* Skeleton Loading */}
        {isLoading &&
          skeleton.map((sk) => (
            <List.Item key={sk} paddingY='5px'>
              <GenreSkeleton key={sk} />
            </List.Item>
        ))}
      {/* Skeleton Loading */}
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageURL(genre.image_background)} />
            <Text fontSize='md'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
