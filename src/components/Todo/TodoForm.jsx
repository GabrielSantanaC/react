import React, { useState } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

import axios from '../../utils/api';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (event) => { // todos os forms retornam um event
    event.preventDefault(); // não deixa a página recarergar

    try {
      const response = await axios.post('/todos', { name: todo, completed: false });
      setTodos([...todos, response.data]);// faz spread dos todos existentes e insere o novo
      setTodo(''); // limpa o campo do formulario. OBS: setTodo !== setTodos
    } catch (error) {
      console.log(error.message);
    }
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
          <Button disabled={!todo.trim()} type="submit">Add Todo</Button>
        </Col>
      </Row>
    </Form>
  );
}
