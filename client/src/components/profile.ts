import React from 'react';

interface ProfileProps {
  stories: string[]; // Array of saved stories
}

const Profile: React.FC<ProfileProps> = ({ stories }) => {
  return (
    <div>
      <h2>Your Saved Stories</h2>
      {/* Display each saved story or show a message if no stories exist */}
      {stories.length > 0 ? (
        stories.map((story, index) => <p key={index}>{story}</p>)
      ) : (
        <p>No saved stories yet!</p>
      )}
    </div>
  );
};

export default Profile;