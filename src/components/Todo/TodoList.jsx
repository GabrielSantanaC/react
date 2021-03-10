import React from 'react';
import './Todo.scss';

const todos = [{
  name: 'Fazer compras',
  completed: true,
}, {
  name: 'Estudar React',
  completed: false,
}, {
  name: 'Comprar pão',
  completed: false,
}];

export default function TodoList() {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo">
          <input type="checkbox" />
          <span className={todo.completed ? 'completed' : ''}>
            {todo.name}
          </span>
        </div>
      ))}
    </div>
  );
}
