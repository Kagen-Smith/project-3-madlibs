import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATE_BY_ID } from '../graphql/queries';
const MadLibPage = () => {
    const { id } = useParams(); // Get template ID from route params
    const { loading, error, data } = useQuery(FETCH_TEMPLATE_BY_ID, { variables: { id } });
    const [story, setStory] = useState(''); // State to store the generated story
    if (loading)
        return Loading;
    /p>; / / Loading;
    state;
    if (error)
        return Error;
    loading;
    template < /p>; / / Error;
    state;
    const template = data.template;
    // Replace placeholders with user input
    const handleGenerateStory = (inputs) => {
        let generatedStory = template.text;
        Object.keys(inputs).forEach((key) => {
            generatedStory = generatedStory.replace(`{${key}}`, inputs[key]);
        });
        setStory(generatedStory); // Update state with generated story
    };
    return {};
    story ? 
    // Display form if story is not yet generated
    fields = { template, : .fields } : ;
    onSubmit = { handleGenerateStory } /  >
    ;
};
// Display the generated story
story = { story } /  >
;
/div>;
;
;
export default MadLibPage;
