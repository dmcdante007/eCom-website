import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const history = useNavigate()
  const onformSubmitHandler = (e) => {
    e.preventDefault();
    history('/store')
  };
  return (
    <>
      <Container>
        <Form style={{ borderRadius: "2px" }} onSubmit={onformSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
            <Form.Text>We'll never share it.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <Button varient="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
