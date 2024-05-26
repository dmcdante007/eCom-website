import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ContextState from "./Context/ContextProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const ctx = useContext(ContextState);
  
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Nav expand="lg" style={{margin: 'auto'}}>
          <Link style={{marginRight: '10px', }} to="/home">HOME</Link>
          <Link style={{marginRight: '10px'}} to="/store">STORE</Link>
          <Link to="/About">ABOUT</Link>
          <Link style={{marginLeft: '10px'}} to="/Contactus">Contact-us</Link>
          <Link style={{marginLeft: '10px'}} to="/LoginPage">Login</Link>
          {/* <Button href="#cart" onClick={ctx.valuesInit.stateIswhat}>
            Cart  <span>{ctx.valuesInit.cartsize}</span>
          </Button> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
