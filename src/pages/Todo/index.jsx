import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
import TodoForm from '../../components/Todo/TodoForm';
import TodoList from '../../components/Todo/TodoList';

import axios from '../../utils/api';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Todo App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Page>
  );
}
