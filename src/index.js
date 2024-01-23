import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Aboutus, Beesafe, Contactus, Menu, Storelocations } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/beesafe',
    element: <Beesafe />,
  },
  {
    path: '/contactus',
    element: <Contactus />,
  },
  {
    path: '/aboutus',
    element: <Aboutus />,
  },
  {
    path: '/storelocations',
    element: <Storelocations />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);