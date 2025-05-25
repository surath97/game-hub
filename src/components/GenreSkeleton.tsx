import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";


function GenreSkeleton() {
  
  return (
    <HStack width='full'>
      <SkeletonCircle size='32px' />
      <SkeletonText noOfLines={1} />
    </HStack>
  )
}

export default GenreSkeleton;