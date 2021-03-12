import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Modal from '../Modal';
import './Todo.scss';

import axios from '../../utils/api';

export default function TodoList({ setTodos, todos = [] }) {
  const [editTodo, setEditTodo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const handleRemove = async ({ id }) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    try {
      await axios.delete(`/todos/${id}`);
      setTodos(newTodos);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleChecked = async (event, _todo) => {
    const { checked: completed } = event.target;

    const newTodos = todos.map((todo) => {
      if (todo.id === _todo.id) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });
    try {
      await axios.put(`/todos/${_todo.id}`, { ..._todo, completed });
      setTodos(newTodos);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setText(todo?.name); // Opitional Chaining ?
    setShowModal(!showModal);
  };

  const onEditTodo = async () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        return {
          ...todo,
          name: text,
        };
      }
      return todo;
    });
    try {
      await axios.put(`/todos/${editTodo.id}`, { ...editTodo, name: text });
      setTodos(newTodos);
      handleEdit();
    } catch (e) {
      console.error(e.message);
    }
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
                <input
                  checked={todo.completed}
                  onChange={(event) => handleChecked(event, todo)}
                  type="checkbox"
                />
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
