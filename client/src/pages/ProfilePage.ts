import React, { useContext } from 'react';
import Profile from '../components/Profile';
import { AuthContext } from '../AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useContext(AuthContext); // Get user data from context