import React from 'react';
import styled from 'styled-components';

interface TemplateCardProps {
  template: {
    id: string;
    title: string;
    description: string;
  };
  onSelect?: (id: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelect }) => {
  return (
    <Card onClick={() => onSelect?.(template.id)}>
      <h3>{template.title}</h3>
      <p>{template.description}</p>
    </Card>
  );
};

export default TemplateCard;

// Styled Components
const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;
