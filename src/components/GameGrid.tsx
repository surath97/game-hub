import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={10}
        padding="10px"
      >
        {/* Skeleton Loading */}
        {isLoading &&
          skeleton.map((sk) => (
            <GameCardContainer>
              <GameCardSkeleton key={sk} />
            </GameCardContainer>
          ))}
        {/* Skeleton Loading */}
        {games.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g} />
          </GameCardContainer> 
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
