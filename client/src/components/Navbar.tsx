import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>MadLibs</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/create">Create Template</StyledLink>
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
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
