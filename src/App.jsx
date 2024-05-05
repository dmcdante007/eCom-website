import React from "react";
import SomeThing from "./components/SomeThing";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ModalIs from "./components/Modal/Modal";
import ContextProvider from "./components/Context/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Store from "./components/Store";

const Router = createBrowserRouter([
  { path: "/About", element: <AboutPage /> },
  { path: "/Store", element: <Store /> },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
