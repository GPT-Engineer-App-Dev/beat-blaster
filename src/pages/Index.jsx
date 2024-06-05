import { Box, Container, Heading, VStack, Text, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to MusicStream
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and stream your favorite music anytime, anywhere.
        </Text>
        <Image src="/images/music-streaming.jpg" alt="Music Streaming" borderRadius="md" />
        <Button colorScheme="teal" size="lg">
          Start Listening
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;