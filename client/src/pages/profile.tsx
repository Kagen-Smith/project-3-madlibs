import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import AuthService from '../utils/auth'; 
import Story from '../models/story';

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (AuthService.loggedIn() && AuthService.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

return (
    <div>
        <h2 className="card-header">
            {profileId ? `${profile.name}'s` : 'Your'} Profile
        </h2>
        <div className="card-body">
            <h5 className="card-header">Stories</h5>
            <div className="card-body">
                {profile.stories?.map((story: Story) => (
                    <div key={story._id} className="mb-3">
                        <p className="card-header">{story.title}</p>
                        <p>{story.story}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Profile;
