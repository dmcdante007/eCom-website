import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ContextState from "./Context/ContextState";
import { Link } from "react-router-dom";

const Header = ()=>{
    const ctx = useContext(ContextState);
    return <>
        <Navbar bg="dark" expand="sm" variant='dark'>
        <Nav expand='lg' className="">
            <Link to="#home">HOME</Link>
            <Link to="/store">STORE</Link>
            <Link to= '/About'>ABOUT</Link>
            <Button  href="#cart" onClick={ctx.valuesInit.stateIswhat}>Cart <span>{ctx.valuesInit.cartsize}</span></Button>
        </Nav>
        </Navbar>
    </>
}



export default Header