import React, { useState } from 'react';
import Page from '../../components/Page';
import TodoForm from '../../components/Todo/TodoForm';
import TodoList from '../../components/Todo/TodoList';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <Page title="Todo App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Page>
  );
}
