import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ContextState from "./Context/ContextState";

const Header = ()=>{
    const ctx = useContext(ContextState);
    return <>
        <Navbar bg="dark" expand="sm" variant='dark'>
        <Nav expand='lg' className="">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Button  href="#cart" onClick={ctx.valuesInit.stateIswhat}>Cart <span>0</span></Button>
        </Nav>
        </Navbar>
    </>
}



export default Header