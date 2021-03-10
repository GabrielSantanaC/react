import React, { useState } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  const unique = () => new Date().getTime();

  const handleSubmit = (event) => { // todos os forms retornam esse event
    event.preventDefault(); // não deixa a página recarergar
    setTodos([...todos, { name: todo, completed: false, id: unique() }]);
    // faz spread dos todos existentes e insere o novo
    setTodo(''); // limpa o campo do formulario. OBS: setTodo != setTodos
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={9} xl={9}>
          <Form.Group>
            <Form.Control
              value={todo}
              onChange={onChange} // Apenas assinatura. Poderia ser (event) => handleSubmit(event)
              placeholder="Insert your Task"
            />
          </Form.Group>
        </Col>
        <Col>
          <Button type="submit">Add Todo</Button>
        </Col>
      </Row>
    </Form>
  );
}
