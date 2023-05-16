import { createBrowserRouter } from 'react-router-dom';
import LogOutlet from './pages/LogOutlet';
import Log from './pages/Log';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogOutlet />,
    children: [
      {
        path: '/',
        element: <Log />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
