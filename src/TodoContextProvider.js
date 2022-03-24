import { createContext, useReducer } from 'react';

const TodoContext = createContext({
  todoItems: [],
  todoDispatch: () => null,
});

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'newTodo':
      return [{ id: new Date(), content: payload, done: false }];
    case 'deleteTodo':
      return state.filter((item) => item.id !== payload);
    case 'toggleTodo':
      const tagetTodo = state.filter((item) => item.id === payload);
      const remainTodo = state.filter((item) => item.id !== payload);

      tagetTodo.done = !tagetTodo.done;

      return [...remainTodo, tagetTodo];
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
