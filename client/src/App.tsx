import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react';
import TemplatesList from './components/templateCard';
import PlayMadLib from './components/playMadlib';
import CompletedStories from './components/madLibStory';
import PhotoSearch from './components/PhotoSearch'; // New component for Unsplash API integration

// Configure Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <h1>Mad Libs</h1>
        </header>
        <main>
          {!selectedTemplate && <TemplatesList onSelect={setSelectedTemplate} />}
          {selectedTemplate && <PlayMadLib template={selectedTemplate} />}
          <PhotoSearch /> {/* New Unsplash API Integration */}
          <CompletedStories />
        </main>
        <footer>
          <p>Powered by Vite + React + Unsplash</p>
        </footer>
      </div>
    </ApolloProvider>
  );
};

export default App;
