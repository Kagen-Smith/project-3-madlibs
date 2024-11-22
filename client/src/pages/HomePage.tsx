import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATES } from '../utils/queries';
import TemplateCard from '../components/TemplateCard';
import styled from 'styled-components';

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_TEMPLATES);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    if (data) setTemplates(data.templates);
  }, [data]);

  if (loading) return <p>Loading templates...</p>;
  if (error) return <p>Error loading templates.</p>;

  return (
    <Container>
      <h1>Choose a Mad Lib Template</h1>
      <TemplateList>
        {templates.map((template: any) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </TemplateList>
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const TemplateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
