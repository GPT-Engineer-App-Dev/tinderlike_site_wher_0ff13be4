import React, { useState } from "react";
import { Box, VStack, Text, IconButton, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const moods = ["happy", "energized", "tired", "anxious", "motivated"];

const MoodCard = ({ mood, onSwipe }) => {
  const bg = useColorModeValue("white", "gray.700");
  return (
    <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg={bg} textAlign="center">
      <Heading size="xl" mb={4}>
        {mood}
      </Heading>
      <IconButton icon={<FaThumbsUp />} onClick={() => onSwipe(true)} colorScheme="green" size="lg" mr={4} />
      <IconButton icon={<FaThumbsDown />} onClick={() => onSwipe(false)} colorScheme="red" size="lg" />
    </Box>
  );
};

const Index = () => {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [selectedMoods, setSelectedMoods] = useState([]);

  const handleSwipe = (isLiked) => {
    if (isLiked) {
      setSelectedMoods([...selectedMoods, moods[currentMoodIndex]]);
    }
    setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  return (
    <Box p={8}>
      <Heading mb={8} textAlign="center">
        Swipe Your Mood
      </Heading>
      {currentMoodIndex < moods.length ? (
        <MoodCard mood={moods[currentMoodIndex]} onSwipe={handleSwipe} />
      ) : (
        <VStack spacing={4}>
          <Text fontSize="xl">Your selected moods:</Text>
          {selectedMoods.map((mood, index) => (
            <Text key={index} fontSize="lg">
              {mood}
            </Text>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Index;
