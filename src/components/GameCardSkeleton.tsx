import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";


function GameCardSkeleton() {
  
  return (
    <Card.Root width={'300px'} borderRadius={10} overflow={'hidden'}>
      <Skeleton height={'220px'} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton;