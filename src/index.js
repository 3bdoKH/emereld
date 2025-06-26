import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Booking from './pages/Services/booking/Booking';
import Photography from './pages/Services/photography/Photography';
import Printing from './pages/Services/printing/Printing';
import Web from './pages/Services/web/Web';
import Social from './pages/Services/socialmedia/Social';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <div>404 Not Found
      <a href="/">Back To Home Page</a>
    </div>
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/services',
    element: <Services />
  },
  {
    path:'/contact',
    element: <Contact />
  },
  {
    path: '/services/web',
    element: <Web />
  },
  {
    path: '/services/booking',
    element: <Booking />
  },
  {
    path: '/services/photography',
    element: <Photography />
  },
  {
    path: '/services/printing',
    element: <Printing />
  },
  {
    path: '/services/social',
    element: <Social />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
