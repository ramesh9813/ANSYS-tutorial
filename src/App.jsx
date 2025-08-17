import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './page/Home';
import Tutorial from './page/Tutorial';
import Contact from './page/Contact';
import ContactUp from './page/ContactUp';
import TutorialLayout from './components/tutorial/TutorialLayout';
import TutorialHome from './page/TutorialHome';
import TutorialCategoryPage from './page/tutorial/TutorialCategoryPage';

const router = createHashRouter([
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
        element: <TutorialLayout />,
        children: [
          {
            path: '',
            element: <Tutorial />,
          },
          {
            path: 'home',
            element: <TutorialHome />,
          },
          {
            path: 'home/:category',
            element: <TutorialCategoryPage />,
          },
        ],
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