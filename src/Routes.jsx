import { createBrowserRouter } from 'react-router-dom';
import LogOutlet from './pages/Log/LogOutlet';
import Log from './pages/Log/Log';
import Login from './pages/Log/Login';
import Register from './pages/Log/Register';
import HomeOutlet from './pages/Home/HomeOutlet';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <LogOutlet />,
        children: [
          {
            path: '/',
            element: <Log />,
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      {
        path: 'home',
        element: <HomeOutlet />,
        children: [
          {
            path: 'home',
            element: <div> home</div>,
          },
          // {
          //   path: 'ecommerce',
          // },
          // {
          //   path: 'my-pets',
          // },
        ],
      },
    ],
  },
]);

export default router;
