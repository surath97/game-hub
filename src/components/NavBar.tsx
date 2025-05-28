import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeToggle } from "./color-mode-toggle";
import SearchInput from "./SearchInput";

interface Props {
  onSerach: (searchText: string) => void;
}


function NavBar({onSerach}: Props) {
    
	return (
		<HStack padding='10px'>
			<Image src={logo} boxSize='60px' />
			<SearchInput onSerach={onSerach} />
			<ColorModeToggle />
		</HStack>
	)
}

export default NavBar;