import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './page/Home';
import Tutorial from './page/Tutorial';
import Contact from './page/Contact';
import ContactUp from './page/ContactUp';
import { TutorialHome } from './components/tutorial/TutorialHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tutorial',
        element: <Tutorial />,
      },
      {
        path: '/tutorial/home',
        element: <TutorialHome />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/contact-us',
        element: <ContactUp />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;