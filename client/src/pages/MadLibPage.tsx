import React, { useState } from 'react';
import styled from 'styled-components';

const MadLibPage: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const [story, setStory] = useState<string | null>(null);

  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const generateStory = () => {
    const template = "Once upon a {1}, there was a {2} who loved {3}.";
    let generatedStory = template;
    inputs.forEach((input, index) => {
      generatedStory = generatedStory.replace(`{${index + 1}}`, input);
    });
    setStory(generatedStory);
  };

  return (
    <Container>
      <h1>Fill in the Blanks</h1>
      {[...Array(3)].map((_, index) => (
        <Input
          key={index}
          placeholder={`Input ${index + 1}`}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <Button onClick={generateStory}>Generate Story</Button>
      {story && <StoryContainer>{story}</StoryContainer>}
    </Container>
  );
};

export default MadLibPage;

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StoryContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
