import { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContextProvider';

const useTodoContext = () => {
  const { todoList, todoDispatch } = useContext(TodoContext);

  const addNewTodo = (text) => {
    todoDispatch({ type: 'newTodo', payload: text });
  };

  const getDoneItems = () => todoList.filter((item) => item.done);

  const getUndoneItems = () =>
    todoList.filter((item) => {
      return item.done === false;
    });

  const deleteTodo = (id) => {
    todoDispatch({ type: 'deleteTodo', payload: id });
  };

  const doneItem = (id) => {
    todoDispatch({ type: 'toggleToDone', payload: id });
  };

  const undoneItem = (id) => {
    todoDispatch({ type: 'toggleToTodo', payload: id });
  };

  return {
    addNewTodo,
    getDoneItems,
    getUndoneItems,
    deleteTodo,
    doneItem,
    undoneItem,
  };
};

export default useTodoContext;
