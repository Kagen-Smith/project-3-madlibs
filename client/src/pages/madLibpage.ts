import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATE_BY_ID } from '../graphql/queries';
import MadLibForm from '../components/MadLibForm';
import MadLibStory from '../components/MadLibStory';

interface Field {
  name: string;
  label: string;
}

interface Template {
    text: string; // Template text with placeholders
    fields: Field[]; // Array of input fields
  }
  
  const MadLibPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get template ID from route params
    const { loading, error, data } = useQuery(FETCH_TEMPLATE_BY_ID, { variables: { id } });
    const [story, setStory] = useState<string>(''); // State to store the generated story
  
    if (loading) return <p>Loading...</p>; // Loading state
    if (error) return <p>Error loading template</p>; // Error state
  
    const template: Template = data.template;

    // Replace placeholders with user input
  const handleGenerateStory = (inputs: Record<string, string>) => {
    let generatedStory = template.text;
    Object.keys(inputs).forEach((key) => {
      generatedStory = generatedStory.replace(`{${key}}`, inputs[key]);
    });
    setStory(generatedStory); // Update state with generated story
  };

  return (
    <div>
      {!story ? (
        // Display form if story is not yet generated
        <MadLibForm fields={template.fields} onSubmit={handleGenerateStory} />
      ) : (
        // Display the generated story
        <MadLibStory story={story} />
      )}
    </div>
  );
};

export default MadLibPage;