import React from 'react';

interface MadLibStoryProps {
  story: string; // The generated story to display
}

const MadLibStory: React.FC<MadLibStoryProps> = ({ story }) => {
  return (
    <div>
      <h2>{story}</h2> {/* Display the story passed as a prop */}
    </div>
  );
};

export default MadLibStory;