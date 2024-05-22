import React, { useContext, useState } from "react";
import { Modal, Button, Col, Row, ListGroup } from "react-bootstrap";
import ContextState from "../Context/ContextProvider";

const ModalIs =()=>{
    const ctx = useContext(ContextState)
    

    return <>
        <Modal show={ctx.valuesInit.modalis} onHide={ctx.valuesInit.closeit}>
        <Modal.Header closeButton>
          <Modal.Title>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListGroup>{ctx.valuesInit.cartitem}</ListGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ctx.valuesInit.closeit}>
            Add more items
          </Button>
          <Button variant="primary" onClick={ctx.valuesInit.closeit}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}

export default ModalIs;