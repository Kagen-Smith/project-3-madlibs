import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MadLibPage from './pages/MadLibPage.tsx'
import Profile from './pages/profile'
import ErrorPage from './pages/error.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/signUp.tsx'
import HomePage from './pages/HomePage.tsx'
import CompletedStories from './components/completedStories.tsx'
import PhotoSearch from './components/PhotoSearch.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', // Add the 'path' property here
        index: true, 
        element: <HomePage />,
      },
      {
        path: '/madlib/:id',
        element: <MadLibPage />,
      },
      {
        path: '/user/:id',
        element: <Profile />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      { 
        path: '/signup',
        element: <Signup />,
      },
      {
        path : '/stories',
        element : <CompletedStories />,
      },
      {
        path : '/photo',
        element : <PhotoSearch />,
      },
      {
        path: '/play',
        element: <MadLibPage />,
      }
    ],
  },

]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />)
}