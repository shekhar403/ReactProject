import Button from 'react-bootstrap/Button'
import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../App';

function CustomForm() {
  const navigate = useNavigate();
  const name = useContext(context);

  const handleClick = (e) => {
    let userName = e.target.elements.formUserName.value;
    name.setName(userName)

    navigate(`/home/${userName}`);
  };

  return (
    <div className='text-center text-light'>
      <h1 className='mb-5'>Login</h1>
      <Form onSubmit={handleClick}>
        <Form.Group as={Row} className="mb-3" controlId="formUserName">
          <Col sm="3"></Col>
          <Form.Label column sm="2">Username :</Form.Label>
          <Col sm="4"><Form.Control type="text" placeholder='User Name' /></Col>
          <Col sm="3"></Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Col sm="3"></Col>
          <Form.Label column sm="2">Email :</Form.Label>
          <Col sm="4"><Form.Control type="email" placeholder='Email' /></Col>
          <Col sm="3"></Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Col sm="3"></Col>
          <Form.Label column sm="2">Password :</Form.Label>
          <Col sm="4"><Form.Control type="password" placeholder="Password" /></Col>
          <Col sm="3"></Col>
        </Form.Group>

        <Button variant="light" type="submit" className='mt-4'>Login</Button>
      </Form>
    </div>
  )
}

export default CustomForm