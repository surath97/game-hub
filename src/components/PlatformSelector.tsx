import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


function PlatformSelector() {

  const selectedPlatformId    = useGameQueryStore(s => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

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
              onClick={() => setSelectedPlatformId(platform.id)}
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
