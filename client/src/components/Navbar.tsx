import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthService from '../utils/auth';

const Navbar: React.FC = () => {
  const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    AuthService.logout();
  };
  return (
    <Nav>
      <Logo>MadLibs</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/photo">Photo search</StyledLink>
        {AuthService.loggedIn() ? (
                        <>
                            <StyledLink to="/me">My Profile</StyledLink>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <StyledLink to="/login">Login</StyledLink>
                            <StyledLink to="/signup">Signup</StyledLink>
                        </>
                    )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4caf50;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: reverse-row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
