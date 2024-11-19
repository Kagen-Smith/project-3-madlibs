import React, { useEffect, useState } from 'react';
import TemplateCard from '../components/TemplateCard';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATES } from '../graphql/queries';

interface Template {
  id: string;
  title: string;
  description: string;
}

const HomePage: React.FC = () => {
  // Fetch templates from the server
  const { loading, error, data } = useQuery(FETCH_TEMPLATES);
  const [templates, setTemplates] = useState<Template[]>([]);

  // Update state when data is fetched
  useEffect(() => {
    if (data) setTemplates(data.templates);
  }, [data]);

  if (loading) return <p>Loading...</p>; // Display loading state
  if (error) return <p>Error loading templates</p>; // Handle error state

  const handleSelect = (templateId: string) => {
    window.location.href = `/madlib/${templateId}`; // Navigate to the MadLibPage
  };

  return (
    <div>
      <h1>Choose a Mad Lib Template</h1>
      {/* Render each template using TemplateCard */}
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} onSelect={handleSelect} />
      ))}
    </div>
  );
};

export default HomePage;