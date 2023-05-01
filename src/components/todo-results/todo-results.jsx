import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const [checkedTodos, setCheckedTodos] = React.useState([]);
  const calculateChecked = React.useCallback(() => {
    // Fix an ability to calculate completed tasks
    setCheckedTodos(todos.filter((todo) => todo.checked === true).length);
  }, [todos]);
  return (
    <div className="todo-results">
      Done:
      {checkedTodos}
    </div>
  );
};
