import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


function SortSelector() {

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" bg="bg.emphasized" borderRadius="md">
          <HStack>
            Order By: Relavence
            <Icon>
              <BsChevronDown />
            </Icon>
          </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {/* {data.map((platform) => (
            <Menu.Item
              onClick={() => PlatformItemClick(platform)}
              value={platform.slug}
              key={platform.id}
            >
              {platform.name}
            </Menu.Item>
          ))} */}
          <Menu.Item value="date">Date</Menu.Item>
          <Menu.Item value="name">Name</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default SortSelector;