import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeToggle } from "./color-mode-toggle";


function NavBar() {
    
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Image src={logo} boxSize='60px' />
			<ColorModeToggle />
		</HStack>
	)
}

export default NavBar;