import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATES } from '../utils/queries';
import styled from 'styled-components';
import TemplatesList from '../components/TemplatesList';

const HomePage: React.FC = () => {
  const { loading, data } = useQuery(FETCH_TEMPLATES);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    if (data) {
      setTemplates(data.templates);
    }
  }, [data]);

  return (
    <Container >
      <h1>Choose a Mad Lib Template</h1>
      <TemplateList>
        {loading && <p>Loading...</p>}
        <TemplatesList template={templates} />

      </TemplateList>
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`

 
  text-align: center;
  padding: 20px;
  position: sticky;
  background-color: red;
`;

const TemplateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
