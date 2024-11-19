import React from 'react';
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

export default TemplatesList;
