import { Box, Container, Heading, VStack, Text, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, FormControl, FormLabel } from "@chakra-ui/react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const handleCreatePlaylist = () => {
    setPlaylists([...playlists, { name: playlistName, description: playlistDescription }]);
    setPlaylistName("");
    setPlaylistDescription("");
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <Button colorScheme="teal" size="lg" onClick={openModal}>
          Create Playlist
        </Button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a New Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="playlist-name" isRequired>
                <FormLabel>Playlist Name</FormLabel>
                <Input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
              </FormControl>
              <FormControl id="playlist-description" mt={4}>
                <FormLabel>Playlist Description</FormLabel>
                <Input value={playlistDescription} onChange={(e) => setPlaylistDescription(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCreatePlaylist}>
                Save
              </Button>
              <Button variant="ghost" onClick={closeModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <VStack spacing={4} mt={8} width="100%">
          {playlists.map((playlist, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Heading as="h3" size="md">{playlist.name}</Heading>
              <Text mt={2}>{playlist.description}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;