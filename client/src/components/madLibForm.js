import { useState } from 'react';
const MadLibForm = ({ fields, onSubmit }) => {
    // Local state to track form values
    const [formValues, setFormValues] = useState({});
    // Handle input changes and update state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    // Submit the form and pass the collected values to the parent component
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form behavior
        onSubmit(formValues); // Send the inputs to parent component
    };
    return onSubmit = { handleSubmit } >
        { /* Dynamically render input fields based on the `fields` prop */};
    {
        fields.map((field, index) => key = { index } >
            htmlFor, { field, : .name } > { field, : .label } < /label>
            < input, type = "text", id = { field, : .name }, name = { field, : .name }, value = { formValues, [field.name]:  || '' }, onChange = { handleChange }, required // Ensure all fields are required
            /  >
            /div>);
    }
    type;
    "submit" > Generate;
    Story < /button> {/ * Submit;
    button * /;
};
/form>;
;
;
export default MadLibForm;
