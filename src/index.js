import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Photography from "./pages/Services/photography/Photography";
import Web from "./pages/Services/web/Web";
import Social from "./pages/Services/socialmedia/Social";
import Seo from "./pages/Services/seo/Seo";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        404 Not Found
        <a href="/">Back To Home Page</a>
      </div>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services/web",
    element: <Web />,
  },
  {
    path: "/services/photography",
    element: <Photography />,
  },
  {
    path: "/services/social",
    element: <Social />,
  },
  {
    path: "/services/seo",
    element: <Seo />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
