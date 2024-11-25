import React from 'react';
import styled from 'styled-components';
import { Template } from '../types/template'; // Import the shared Template type

interface TemplatesListProps {
  templates: Template[]; // Array of templates
  onSelect: (templateId: string) => void; // Function to handle selection
}

const TemplatesList: React.FC<TemplatesListProps> = ({ templates, onSelect }) => {
  if (!templates.length) {
    return <p>No templates available.</p>;
  }

  return (
    <Container>
      {templates.map((template) => (
        <StyledButton key={template._id} onClick={() => onSelect(template._id)}>
          {template.title}
        </StyledButton>
      ))}
    </Container>
  );
};

export default TemplatesList;

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
