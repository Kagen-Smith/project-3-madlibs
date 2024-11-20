import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
ReactDOM.render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App />
  </React.StrictMode>);
