import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";


function GameCardSkeleton() {
  
  return (
    <Card.Root>
      <Skeleton height={'220px'} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton;