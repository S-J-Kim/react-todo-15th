import { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContextProvider';

const useTodoContext = () => {
  const { todoList, todoDispatch } = useContext(TodoContext);

  const addNewTodo = (text: string) => {
    todoDispatch({ type: 'newTodo', payload: text });
  };

  const getDoneItems = () => todoList.filter((item) => item.done);

  const getUndoneItems = () =>
    todoList.filter((item) => {
      return item.done === false;
    });

  const deleteTodo = (id: number) => {
    todoDispatch({ type: 'deleteTodo', payload: id });
  };

  const doneItem = (id: number) => {
    todoDispatch({ type: 'toggleToDone', payload: id });
  };

  const undoneItem = (id: number) => {
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
