import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

export default function TodoForm() {
  return (
    <Row>
      <Col xl={9} lg={9}>
        <Form.Group>
          <Form.Control placeholder="Insert your Task" />
        </Form.Group>
      </Col>
      <Col>
        <Button>Add Todo</Button>
      </Col>
    </Row>
  );
}
