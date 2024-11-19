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