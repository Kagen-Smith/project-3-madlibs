
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react';
import TemplatesList from './components/TemplatesList';
import PlayMadLib from './components/PlayMadLib';
import CompletedStories from './components/CompletedStories';
const client = new ApolloClient({
    uri: '', // Fill in with GraphQL API endpoint
    cache: new InMemoryCache(),
});
export default client;

const App = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    return (<div>
      <h1>Mad Libs</h1>
      {!selectedTemplate && <TemplatesList onSelect={setSelectedTemplate}/>}
      {selectedTemplate && (<PlayMadLib template={selectedTemplate}/>)}
      <CompletedStories />
    </div>);
};
export default App;

