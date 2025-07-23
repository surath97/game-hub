import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";


interface Props {
  children: ReactNode;
}

function GameCardContainer({children}: Props) {
  
  return (
    <Box borderRadius={10} overflow={'hidden'} className="hover:scale-105 transition-all duration-300">
      {children}
    </Box>
  )
}

export default GameCardContainer;