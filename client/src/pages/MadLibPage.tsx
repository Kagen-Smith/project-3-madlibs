import React from 'react';
import styled from 'styled-components';
import PlayMadLib from '../components/playMadLib';

const MadLibPage: React.FC = () => {

  return (
    <Container>
      <h1>Fill in the Blanks</h1>
      <PlayMadLib />
    </Container>
  );
};

export default MadLibPage;

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;
