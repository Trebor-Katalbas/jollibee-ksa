import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { motion, useScroll } from 'framer-motion';
import './index.css';
import App from './App';
import { Aboutus, Beesafe, Contactus, Menu, Storelocations } from './pages';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
};

const routes = [
  {
    path: '/',
    element: (
      <div>
        <ScrollProgressBar />
        <Outlet />
      </div>
    ),
    children: [
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
    ],
  },
];

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
