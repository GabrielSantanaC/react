import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Todo.scss';

export default function TodoList({ setTodos, todos = [] }) {
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

  return (
    <div>
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
                <Button className="mr-2">Edit</Button>
                <Button variant="danger" onClick={() => handleRemove(todo)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
