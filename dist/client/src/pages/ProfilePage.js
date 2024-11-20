import { useContext } from 'react';
import Profile from '../components/Profile';
import { AuthContext } from '../AuthContext';
const ProfilePage = () => {
    const { user } = useContext(AuthContext); // Get user data from context
    return Your;
    Profile < /h1>;
    { /* Display user's saved stories if logged in */ }
    {
        user ? stories = { user, : .savedStories } /  >
            :
        ;
    }
};
Please;
log in to;
view;
your;
saved;
stories. < /p> / / Prompt;
to;
log in
;
/div>;
;
;
export default ProfilePage;
