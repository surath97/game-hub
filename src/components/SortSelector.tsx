import { Button, HStack, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";


function SortSelector() {

  const selectedSort    = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSelectedSort = useGameQueryStore(s => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === selectedSort);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" bg="bg.emphasized" borderRadius="md">
          <HStack>
            Order By: {currentSortOrder?.label || "Relevance"}
            <Icon>
              <BsChevronDown />
            </Icon>
          </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((sort) => (
            <Menu.Item
              onClick={() => setSelectedSort(sort.value)}
              value={sort.value}
              key={sort.value}
            >
              {sort.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}

export default SortSelector;
