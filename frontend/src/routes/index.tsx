import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layouts/app.layout';
import AboutPage from '@/pages/about.page';
import ErrorPage from '@/pages/error.page';
import HomePage from '@/pages/home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
