import { createBrowserRouter } from 'react-router-dom';
import LogOutlet from './pages/LogOutlet';
import Log from './pages/Log';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogOutlet />,
    children: [
      {
        path: '/',
        element: <Log />,
      },
    ],
  },
]);

export default router;
