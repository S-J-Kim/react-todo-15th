import { createContext, useReducer } from 'react';

const TodoContext = createContext({
  todoList: [],
  todoDispatch: () => null,
});

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'newTodo':
      return [{ id: new Date(), content: payload, done: false }, ...state];
    case 'deleteTodo':
      return state.filter((item) => item.id !== payload);
    case 'toggleToDone': {
      const tagetTodo = state.filter((item) => item.id === payload)[0];
      const remainTodo = state.filter((item) => item.id !== payload);

      tagetTodo.done = true;

      return [...remainTodo, tagetTodo];
    }
    case 'toggleToTodo': {
      const tagetTodo = state.filter((item) => item.id === payload)[0];
      const remainTodo = state.filter((item) => item.id !== payload);

      tagetTodo.done = false;

      return [...remainTodo, tagetTodo];
    }
  }
};

const TodoContextProvider = ({ children }) => {
  const [todoList, todoDispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todoList, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
export { TodoContext };
