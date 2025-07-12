import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {

  const [textExpand, setTextExpand] = useState(false);
  const textLimit = 300;

  if (!children) return null;

  if (children.length <= textLimit) {
    return <Text>{children}</Text>;
  }

  const summary = textExpand ? children : (children.substring(0, textLimit) + '...');

  return (
    <Text>
      {summary}{" "}
      <Button size="2xs" fontWeight="bold" colorPalette="yellow" onClick={() => setTextExpand(!textExpand)}>
        {textExpand ? "Show Less" : "Load More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
