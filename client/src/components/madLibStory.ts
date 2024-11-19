import React from 'react';

interface MadLibStoryProps {
  story: string; // The generated story to display
}

const MadLibStory: React.FC<MadLibStoryProps> = ({ story }) => {
  return (
    <div>
      <h2>Your Mad Lib Story</h2>
      <p>{story}</p> {/* Display the story passed as a prop */}
    </div>
  );
};

export default MadLibStory;