import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Modal from '../Modal';
import './Todo.scss';

export default function TodoList({ setTodos, todos = [] }) {
  const [editTodo, setEditTodo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const handleRemove = ({ id }) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleChecked = (event, { id }) => {
    const { checked } = event.target;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: checked,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setText(todo?.name); // Opitional Chaining ?
    setShowModal(!showModal);
  };

  const onEditTodo = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        return {
          ...todo,
          name: text,
        };
      }
      return todo;
    });

    setTodos(newTodos);
    handleEdit();
  };

  return (
    <>
      <Table bordered hover className="todos">
        <thead>
          <tr>
            <th width="6%">#</th>
            <th width="60%">Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index} className="todo">
              <td>
                <input onChange={(event) => handleChecked(event, todo)} type="checkbox" />
              </td>
              <td>
                <span className={todo.completed ? 'completed' : ''}>
                  {todo.name}
                </span>
              </td>
              <td>
                <Button onClick={() => handleEdit(todo)} className="mr-2">
                  <FaPencilAlt />
                  {' Edit'}
                </Button>
                <Button variant="danger" onClick={() => handleRemove(todo)}>
                  <FaTrash />
                  {' Remove'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        onSubmit={onEditTodo}
        show={showModal}
        toggle={() => handleEdit()}
        title={editTodo?.name}
      >
        <Form.Group>
          <Form.Label>Todo name</Form.Label>
          <Form.Control
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </Form.Group>
      </Modal>
    </>
  );
}
