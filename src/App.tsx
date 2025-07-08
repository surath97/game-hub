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


// undefined: The absence of a value
// null:      The intenational absence of a value --> unselect


function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<ParentPlatform | null>(null);


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
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft='10px'>
          <GameHeading />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
