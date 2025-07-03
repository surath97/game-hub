import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { type ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  PlatformItemClick: (platform: ParentPlatform) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({ PlatformItemClick, selectedPlatformId }: Props) {

  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId);

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
