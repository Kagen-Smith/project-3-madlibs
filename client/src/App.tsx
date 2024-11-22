import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import './App.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react';
import TemplatesList from './components/TemplatesList';
import PlayMadLib from './components/PlayMadLib';
import CompletedStories from './components/CompletedStories';
import PhotoSearch from './components/PhotoSearch';

const client = new ApolloClient({
  uri: '', // Fill in with GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div>
      <h1>Mad Libs</h1>
      {!selectedTemplate && <TemplatesList onSelect={setSelectedTemplate} />}
      {selectedTemplate && (
        <PlayMadLib template={selectedTemplate} />
      )}
      <CompletedStories />
    </div>
  );
};

export default App;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
