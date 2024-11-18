import React, { useState } from 'react';

interface MadLibFormProps {
  fields: { name: string; label: string }[]; // Array of input fields
  onSubmit: (inputs: Record<string, string>) => void; // Callback function to handle form submission
}

const MadLibForm: React.FC<MadLibFormProps> = ({ fields, onSubmit }) => {
  // Local state to track form values
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  // Handle input changes and update state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Submit the form and pass the collected values to the parent component
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form behavior
    onSubmit(formValues); // Send the inputs to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dynamically render input fields based on the `fields` prop */}
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={handleChange}
            required // Ensure all fields are required
          />
        </div>
      ))}
      <button type="submit">Generate Story</button> {/* Submit button */}
    </form>
  );
};

export default MadLibForm;