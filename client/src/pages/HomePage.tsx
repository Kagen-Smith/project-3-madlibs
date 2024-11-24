import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATES } from '../graphql/queries';
import TemplateCard from '../components/TemplateCard';
import styled from 'styled-components';

// Define the type for templates
interface Template {
  _id: string;
  title: string;
  description: string;
  content: string;
}

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_TEMPLATES);
  const [templates, setTemplates] = useState<Template[]>([]);

  // Sync data from GraphQL query to state
  useEffect(() => {
    if (data?.templates) {
      setTemplates(data.templates);
    }
  }, [data]);

  if (loading) {
    return (
      <Container>
        <p>Loading templates...</p>
        <Spinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>
          <h2>Error Loading Templates</h2>
          <p>{error.message}</p>
        </ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Choose a Mad Lib Template</h1>
      {templates.length > 0 ? (
        <TemplateList>
          {templates.map((template) => (
            <TemplateCard key={template._id} template={template} />
          ))}
        </TemplateList>
      ) : (
        <p>No templates available at the moment. Please check back later.</p>
      )}
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

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 20px 0;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
