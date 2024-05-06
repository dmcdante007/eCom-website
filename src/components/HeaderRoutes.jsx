import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const HeaderRoutes = ()=>{

    return <>
        <Header/>
        <Outlet/>
    </>
}

export default HeaderRoutes;