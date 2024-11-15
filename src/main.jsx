import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'

import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Statistic from "./components/Statistic/Statistic.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Home from "./components/Home/Home.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>,
        children: [
          {
            path: '/statistic',
            element: <ProductDetails></ProductDetails>
          },
        ],
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
