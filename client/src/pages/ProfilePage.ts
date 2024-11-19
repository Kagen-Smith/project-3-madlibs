import React, { useContext } from 'react';
import Profile from '../components/Profile';
import { AuthContext } from '../AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useContext(AuthContext); // Get user data from context

  return (
    <div>
      <h1>Your Profile</h1>
      {/* Display user's saved stories if logged in */}
      {user ? (
        <Profile stories={user.savedStories} />
      ) : (
        <p>Please log in to view your saved stories.</p> // Prompt to log in
      )}
    </div>
  );
};

export default ProfilePage;