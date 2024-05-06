import React from "react";
import SomeThing from "./components/SomeThing";
import Header from "./components/Header";
import HeaderRoutes from "./components/HeaderRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ModalIs from "./components/Modal/Modal";
import ContextProvider from "./components/Context/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Store from "./components/Store";
import HomePage from "./Pages/HomePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderRoutes />,
    children: [
      { path: "/About", element: <AboutPage /> },
      { path: "/Store", element: <Store /> },
      {path: '/home', element: <HomePage/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
