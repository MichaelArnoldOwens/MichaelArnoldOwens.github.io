import { useState } from 'react';

export default (initialValue: Array<string>) => {
  const [todos, setTodos] = useState<Array<string>>(initialValue);

  return {
    todos,
    addTodo: (todoText: string) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex: number) => {
      const newTodos = todos.filter((_: unknown, index: number) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};