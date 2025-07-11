import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import robotImage from '../assets/robot.png';

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      // bg="gray.50"
      position="relative"
      className="bg-gradient-to-b from-gray-100 to-gray-200"
    >
    <VStack gap={4} textAlign="center" zIndex={1} paddingX={3}>

      <Image
        src={robotImage}
        alt="Cute Robot"
        // position="absolute"
        opacity={0.9}
        boxSize="300px"
        objectFit="contain"
        zIndex={0}
      />
      
      {/* Error Message */}
        <Heading
          as="h1"
          size="3xl"
          color="gray.400"
          className="font-bold text-6xl"
        >
          Error
        </Heading>
        <Text
          fontSize="xl"
          color="gray.600"
          className="max-w-md"
        >
          Oops! { isRouteErrorResponse(error) ? 'The page not found..' : 'An unexpected error occured' } 
        </Text>
        <Text
          fontSize="md"
          color="gray.500"
        >
          Let's get you back to safety. Try returning to the homepage.
        </Text>
      </VStack>
    </Box>
  );
};

export default ErrorPage;