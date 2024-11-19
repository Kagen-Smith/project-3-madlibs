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
    </div>
  );
};

export default TemplateCard;