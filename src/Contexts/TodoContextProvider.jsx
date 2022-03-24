import { createContext, useReducer } from 'react';

const TodoContext = createContext({
  todoList: [],
  todoDispatch: () => null,
});

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'newTodo':
      return [
        { id: new Date().getTime(), content: payload, done: false },
        ...state,
      ];

    case 'deleteTodo':
      return state.filter((item) => item.id !== payload);

    case 'toggleToTodo': {
      const targetTodo = state.filter((item) => item.id === payload)[0];
      const remainTodo = state.filter((item) => item.id !== payload);

      targetTodo.done = false;

      return [targetTodo, ...remainTodo];
    }

    case 'toggleToDone': {
      const targetTodo = state.filter((item) => item.id === payload)[0];
      const remainTodo = state.filter((item) => item.id !== payload);

      targetTodo.done = true;

      return [targetTodo, ...remainTodo];
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
