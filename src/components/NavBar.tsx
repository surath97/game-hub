import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import useGameQueryStore from "../store";
import { ColorModeToggle } from "./color-mode-toggle";
import SearchInput from "./SearchInput";

function NavBar() {

  const setRefresh = useGameQueryStore(s => s.setRefresh);

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" onClick={() => setRefresh()} />
      </Link>
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );

}

export default NavBar;
