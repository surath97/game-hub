import { Box, Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { ParentPlatform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatform | null;
  sortOrder: string;
  searchText: string;
}


function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<ParentPlatform | null>(null);

  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


  return (

    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSerach={(searchText) => setGameQuery({...GameQuery, searchText})} />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <GenreList clickedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({...GameQuery, genre})} />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft='10px'>
          <GameHeading gameQuery={GameQuery} />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector selectedPlatform={GameQuery.platform} PlatformItemClick={(platform) => setGameQuery({...GameQuery, platform})} />
            <SortSelector selectedSort={GameQuery.sortOrder} SortSeItemClick={(sortOrder) => setGameQuery({...GameQuery, sortOrder})} />
          </HStack>
        </Box>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
