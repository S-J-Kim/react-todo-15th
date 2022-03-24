import { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContextProvider';

const useTodoContext = () => {
  const { todoList, todoDispatch } = useContext(TodoContext);

  const addNewTodo = (text) => {
    todoDispatch({ type: 'newTodo', payload: text });
  };

  const getDoneItems = () => todoList.filter((item) => item.done);

  const getUndoneItems = () => todoList.filter((item) => !item.done);

  const deleteNewTodo = (id) => {
    todoDispatch({ type: 'deleteTodo', payload: id });
  };

  const doneItem = (id) => {
    todoDispatch({ type: 'toggleToDone', payload: id });
  };

  const undoneItem = (id) => {
    todoDispatch({ tyoe: 'toggleToTode', payload: id });
  };

  return {
    addNewTodo,
    getDoneItems,
    getUndoneItems,
    deleteNewTodo,
    doneItem,
    undoneItem,
  };
};

export default useTodoContext;
