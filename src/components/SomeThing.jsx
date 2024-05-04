import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ContextState from "./Context/ContextState";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const SomeThing = () => {
  const ctx = useContext(ContextState);
  

  const displayArr = productsArr.map((item) => (
    <Col key={Math.random()}>
      {item.title}
      <img src={item.imageUrl}></img>{" "}
      <span>
        {item.price} <Button onClick={()=>ctx.valuesInit.cartClicked(item)} type="primary">ADD TO CART</Button>
      </span>
    </Col>
  ));
  return (
    <Container style={{maxWidth: '800px', justifyContent:'center'}}>
      <Row>{displayArr}</Row>
    </Container>
  );
};

export default SomeThing;
