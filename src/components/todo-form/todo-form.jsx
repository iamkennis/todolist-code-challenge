import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = (props) => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');
  function createTodo() {
    const id = todos.length + 1;
    return {
      id,
      task,
      checked: false,
    };
  }
  const handleAddTodo = () => {
     // Fix an ability to add new task
    setTodos([...todos, createTodo(task)]);
    console.log(todos);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
