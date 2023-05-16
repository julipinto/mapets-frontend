import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import routes from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <head>
      <link rel="manifest" href="/manifest.json" />
      <title>Mapet</title>
    </head> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);
