import type React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {/* Navigation links to different routes */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;