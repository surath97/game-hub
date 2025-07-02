import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { type ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  PlatformItemClick: (platform: ParentPlatform) => void;
  selectedPlatform: ParentPlatform | null;
}

function PlatformSelector({ PlatformItemClick, selectedPlatform }: Props) {

  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" bg="bg.emphasized" borderRadius="md">
          <HStack>
            {selectedPlatform?.name || 'Platform'}
            <Icon>
              <BsChevronDown />
            </Icon>
          </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data?.results.map((platform) => (
            <Menu.Item
              onClick={() => PlatformItemClick(platform)}
              value={platform.slug}
              key={platform.id}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}

export default PlatformSelector;
