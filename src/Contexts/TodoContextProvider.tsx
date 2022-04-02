import { createContext } from 'react';
import useSyncedReducer from '../hooks/useSyncedReducer';
import { TodoAction } from '../Interfaces/actions';
import { ITodoCtx, TodoList } from '../Interfaces/interface';

const initialTodoList = [
  {
    id: 0,
    content: '',
    done: false,
  },
];

const TodoContext = createContext<ITodoCtx>({
  todoList: initialTodoList,
  todoDispatch: (value: TodoAction) => null,
});

const todoReducer = (
  state: TodoList,
  { type, payload }: TodoAction
): TodoList => {
  switch (type) {
    case 'initialize':
      return payload;

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

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, todoDispatch] = useSyncedReducer<TodoList, TodoAction>(
    'todo-item',
    todoReducer,
    initialTodoList
  );

  return (
    <TodoContext.Provider value={{ todoList, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
export { TodoContext };
