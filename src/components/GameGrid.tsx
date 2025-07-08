import { Center, Heading, Highlight, HStack, Image, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import high_five from "../assets/icons8-high-five-black.gif";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


function GameGrid() {

  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,

  } = useGames();


  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];


  const fetchedGamesCount =
    data?.pages.reduce((total, page) => {
      return total + page.results.length;
    }, 0) || 0;

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (

    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <VStack marginY={8}>
          <Spinner size="lg" color="gray.focusRing" borderWidth="4px" />
          <Text>Loading</Text>
        </VStack>
      }
      endMessage={
        <Center>
          <HStack spaceX={5} marginY={10}>
            <Image src={high_five} boxSize='40px' /> 
            <Heading size="xl" >
              <Highlight query="all..!" styles={{ color: "purple.emphasized" }}>
                You got it all..!
              </Highlight>
            </Heading>
          </HStack>
        </Center>
      }
    >
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
    </InfiniteScroll>
  );
}

export default GameGrid;
