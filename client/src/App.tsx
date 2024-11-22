import './App.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react';
import TemplatesList from './components/TemplatesList';
import PlayMadLib from './components/PlayMadLib';
import CompletedStories from './components/CompletedStories';
import PhotoSearch from './components/PhotoSearch';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';



const client = new ApolloClient({
  uri: '', // Fill in with GraphQL API endpoint
  cache: new InMemoryCache(),
});


function App() {


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Mad Libs</h1>
      </div>
    </ApolloProvider>
  )

  
}

export default App;

