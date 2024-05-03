import React, { useState } from "react";
import ContextState from "./ContextState";
import { ListGroup } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const ContextProvider = (props) => {
  const [modalView, setmodalView] = useState(false);
  const stateIs = () => {
    setmodalView(true);
  };
  const handleClose = () => setmodalView(!modalView);
  const handleShow = () => setmodalView(true);
  //for handling the model state --------------

  //for showing items in the cart model ->

  const cartList = cartElements.map((ele)=>(
    <ListGroup.Item>{ele.title} {ele.price} <span style={{textAlign: 'right'}}>{ele.quantity}</span></ListGroup.Item>
  ))




  const valuesInit = {
    modalis: modalView,
    stateIswhat: stateIs,
    closeit: handleClose,
    openit: handleShow,
    cartitem : cartList,
  };

  return (
    <ContextState.Provider value={{ valuesInit }}>
      {props.children}
    </ContextState.Provider>
  );
};

export default ContextProvider;