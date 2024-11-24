import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATES } from '../utils/queries';
import styled from 'styled-components';
import TemplatesList from '../components/TemplatesList';

interface Template {
  _id: string;
  title: string;
  description: string;
  content: string; 
}

const HomePage: React.FC = () => {
  const { loading, data } = useQuery(FETCH_TEMPLATES);
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    if (data?.templates) {
      setTemplates(data.templates);
    }
  }, [data]);

  return (
    <Container>
      <h1>Choose a Mad Lib Template</h1>
      <TemplateList>
        {loading && <p>Loading...</p>}
        <TemplatesList templates={templates} />
      </TemplateList>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const TemplateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
