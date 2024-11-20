import React from 'react';


interface TemplateCardProps {
  template: { id: string; title: string; description: string }; // Template object
  onSelect: (templateId: string) => void; // Callback when a template is selected
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelect }) => {
  return (
    <div onClick={() => onSelect(template.id)}> {/* Trigger callback on click */}
      <h3>{template.title}</h3> {/* Template title */}
      <p>{template.description}</p> {/* Template description */}
=======
import { useQuery } from '@apollo/client';
import { GET_TEMPLATES } from '../graphql/queries';

const TemplatesList = ({ onSelect }) => {
  const { loading, error, data } = useQuery(GET_TEMPLATES);

  if (loading) return <p>Loading templates...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Select a Template</h2>
      <ul>
        {data.getTemplates.map((template) => (
          <li key={template.id} onClick={() => onSelect(template)}>
            {template.title}
          </li>
        ))}
      </ul>

    </div>
  );
};


export default TemplateCard;
=======
export default TemplatesList;

