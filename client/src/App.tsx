import './App.css'
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <link rel="stylesheet" href="app.css" />
        <div className='header' >
          <Header /> 
          {/* combined components into one file for easier readability */}

          {/* Main Content */}
          <main className='main'>
          <Outlet />
          </main>

          {/* Footer */}
         <Footer />
        </div>
    </ApolloProvider>
  );
};

export default App;
