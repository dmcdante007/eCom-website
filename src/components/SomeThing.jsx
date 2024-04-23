import React from "react";
import { Button, Col, Row } from "react-bootstrap";
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

    const displayArr = productsArr.map((item)=>(
        <Col>{item.title} {item.price} <img src={item.imageUrl}></img></Col>
    ))
  return (
    <>
    <Row>
      {displayArr} 
      </Row>
    </>
  );
};

export default SomeThing;
