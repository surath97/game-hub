import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import type { Platform } from "../hooks/useGames";

// icon imports
import { CgMicrosoft } from "react-icons/cg";
import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaInternetExplorer,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";
import { SiIos, SiMacos, SiSega } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  
  const IconMap: { [key: string]: IconType } = {
    pc: CgMicrosoft,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
    android: GrAndroid,
    ios: SiIos,
    macos: SiMacos,
    web: FaInternetExplorer,
    sega: SiSega,
    'neo-geo': FaInternetExplorer
  };

  return (
    <HStack marginY={2}>
      {platforms.map((pt) => (
        <Icon key={pt.id} as={IconMap[pt.slug]} color="gray.500" />
      ))}
    </HStack>
    // ------- Test new platforms
    // <ul>
    //   {platforms.map(p => <li>{p.slug}</li>)}
    // </ul>
  );
}

export default PlatformIconList;
