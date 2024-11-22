import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from 'react';
import CompletedStories from './components/CompletedStories';
import PlayMadLib from './components/PlayMadLib';
import TemplatesList from './components/TemplatesList';

const client = new ApolloClient({
  uri: '', // Fill in with GraphQL API endpoint
  cache: new InMemoryCache(),
});


function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Mad Libs</h1>
        <TemplatesList setSelectedTemplate={setSelectedTemplate} />
        <PlayMadLib template={selectedTemplate} /> // Update the prop name to 'template'
        <CompletedStories />
      </div>
    </ApolloProvider>
  )

  
}

export default App;

