import React from "react";

import HeaderRoutes from "./components/HeaderRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Store from "./components/Store";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HeaderRoutes />,
//     children: [
//       { path: "/About", element: <AboutPage /> },
//       { path: "/Store", element: <Store /> },
//       { path: "/home", element: <HomePage /> },
//       { path: "/Contactus", element: <ContactUs /> },
//     ],
//   },
// ]);

function App() {
  return (
    <>
      <HeaderRoutes />
      <Routes>
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/Contactus" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
