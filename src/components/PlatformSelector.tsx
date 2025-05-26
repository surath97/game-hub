import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";



function PlatformSelector() {

  const { data, error } = usePlatforms();
  
  if(error) return null;

  return (

    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" bg="bg.emphasized" borderRadius="md">
          <HStack>
            Platform
            <Icon>
              <BsChevronDown />
            </Icon>
          </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
         {data.map(platform => <Menu.Item value={platform.slug} key={platform.id}>{platform.name}</Menu.Item>)}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default PlatformSelector;