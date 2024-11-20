import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATES } from '../graphql/queries';
const HomePage = () => {
    // Fetch templates from the server
    const { loading, error, data } = useQuery(FETCH_TEMPLATES);
    const [templates, setTemplates] = useState([]);
    // Update state when data is fetched
    useEffect(() => {
        if (data)
            setTemplates(data.templates);
    }, [data]);
    if (loading)
        return Loading;
    /p>; / / Display;
    loading;
    state;
    if (error)
        return Error;
    loading;
    templates < /p>; / / Handle;
    error;
    state;
    const handleSelect = (templateId) => {
        window.location.href = `/madlib/${templateId}`; // Navigate to the MadLibPage
    };
    return Choose;
    a;
    Mad;
    Lib;
    Template < /h1>;
    { /* Render each template using TemplateCard */ }
    {
        templates.map((template) => key = { template, : .id }, template = { template }, onSelect = { handleSelect } /  >
        );
    }
    /div>;
};
;
;
export default HomePage;
