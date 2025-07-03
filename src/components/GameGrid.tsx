import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {

  const { data, error, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        padding="10px"
      >
        {/* Skeleton Loading */}
        {isLoading &&
          skeleton.map((sk) => (
            <GameCardContainer key={sk}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* Skeleton Loading */}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      { hasNextPage && <Button onClick={() => fetchNextPage()}>{ isFetchingNextPage ? 'Loading...' : 'Load More' }</Button>}
    </>
  );
}

export default GameGrid;
