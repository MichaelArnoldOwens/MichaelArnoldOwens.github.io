import React, { useState } from 'react';
import useTodoState from 'hooks/useTodoState';
// import Button from 'react-bootstrap/Button';
import grid from 'styles/grid.module.css';

const Todo = () => {
  // const [tasks, setTasks] = useState<Array<Task>>([{description: 'Task 1', done: false}, {description: 'Task 2', done: false}]);
  const {todos, addTodo, deleteTodo} = useTodoState([]);

  return (
    <div className={grid.container}>
      <TodoForm saveTodo={(todo) => {
        const trimmed = todo.trim();
        if (trimmed.length > 0) {
          addTodo(todo);
        }
      }} />
      <TaskList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

type TodoFormProps = {
  saveTodo: (todo: string) => void
};

const TodoForm = (props: TodoFormProps) => {
  const { saveTodo } = props;
  const [value, setValue] = useState<string>('');
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  }
  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
        
        if (value) {
          saveTodo(value);
        }
    
        setValue('');
      }}
    >
      <input placeholder="Add todo" value={value} onChange={handleInputChange} />
    </form>
  )
}

const TaskList = (props: {todos: Array<string>, deleteTodo: (i: number) => void }) => {
  const {todos, deleteTodo } = props;
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li><button onClick={() => deleteTodo(index)} >Delete</button> - { todo }</li>
      })}
    </ul>
  )
}

export default Todo;
