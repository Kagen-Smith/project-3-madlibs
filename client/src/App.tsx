import './App.css'
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <link rel="stylesheet" href="app.css" />
        <div>
          <header>
          <Header /> 
          </header>
          {/* combined components into one file for easier readability */}

          {/* Main Content */}
          <main className='main'>
          <Outlet />
          </main>

          {/* Footer */}
          <footer>
         <Footer />
          </footer>
        </div>
    </ApolloProvider>
  );
};

export default App;
