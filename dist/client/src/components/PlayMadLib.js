import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SUBMIT_STORY } from '../graphql/mutations';
const PlayMadLib = ({ template }) => {
    const [filledWords, setFilledWords] = useState([]);
    const [submitStory, { data, loading, error }] = useMutation(SUBMIT_STORY);
    const placeholders = template.content.match(/\[.*?\]/g) || [];
    const handleSubmit = async () => {
        await submitStory({
            variables: {
                templateId: template.id,
                filledWords,
            },
        });
    };
    if (loading)
        return Submitting;
    story;
    /p>;
    if (error)
        return Error;
    {
        error.message;
    }
    /p>;
    if (data)
        return Your;
    completed;
    story: {
        data.submitStory.finalStory;
    }
    /p>;
    return ({ template, : .title } < /h2>
        < p > { template, : .content } < /p>);
    {
        placeholders.map((placeholder, index) => key = { index } >
            { placeholder } < /label>
            < input, type = "text", value = { filledWords, [index]:  || '' }, onChange = {}(e));
    }
};
{
    const newWords = [...filledWords];
    newWords[index] = e.target.value;
    setFilledWords(newWords);
}
/>
    < /div>;
onClick;
{
    handleSubmit;
}
 > Submit < /button>
    < /div>;
;
;
export default PlayMadLib;
