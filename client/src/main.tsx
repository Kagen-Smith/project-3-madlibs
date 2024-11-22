import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MadLibPage from './pages/MadLibPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
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
    ],
  },

]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />)
}