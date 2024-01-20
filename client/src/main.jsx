import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error from './pages/Error';
// for routing process
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/Welcome.jsx';
import Home from './pages/Home';
import About from './pages/About';

// set up structure of app and its pages(children)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);