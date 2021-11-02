import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const Login = () => {
  return (
    <Form style={{ padding: '10px' }}>
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Col sm="2">
          <Form.Label>שם משתמש</Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control type="email" placeholder="Enter email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
        <Form.Label>סיסמא</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
