import './App.css'
import React, { useState } from 'react';
import PhotoSearch from './components/PhotoSearch';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TemplatesList from './components/TemplatesList';
import { JSX } from 'react/jsx-runtime';



const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* Navigation Bar */}
          <header>
            <h1>Mad Libs</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Templates</Link>
                </li>
                <li>
                  <Link to="/play">Play Mad Lib</Link>
                </li>
                <li>
                  <Link to="/photos">Photo Search</Link>
                </li>
                <li>
                  <Link to="/stories">Completed Stories</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main Content */}
          <main>
            <Routes>
              {/* Templates List */}
              <Route
                path="/"
                element={
                  <TemplatesList
                    onSelect={(template) => {
                      setSelectedTemplate(template);
                      window.location.href = '/play'; // Navigate to Play page when template is selected
                    } } story={{
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
                      map: function (_arg0: (story: any) => JSX.Element): React.ReactNode {
                        throw new Error('Function not implemented.');
                      },
                      length: 0,
                      _id: '',
                      title: '',
                      story: ''
                    }} isLoggedUser={false}                  />
                }
              />

              {/* Play Mad Lib */}
              <Route
                path="/play"
                element={
                  selectedTemplate ? (
                    <PlayMadLib template={selectedTemplate} />
                  ) : (
                    <p>Please select a template first!</p>
                  )
                }
              />

              {/* Photo Search */}
              <Route path="/photos" element={<PhotoSearch />} />

              {/* Completed Stories */}
              <Route path="/stories" element={<CompletedStories />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer>
            <p>Powered by Vite + React + Unsplash</p>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
