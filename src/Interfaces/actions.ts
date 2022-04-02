import { TodoList } from './interface';

export type TodoAction =
  | {
      type: 'initialize';
      payload: TodoList;
    }
  | {
      type: 'newTodo';
      payload: string;
    }
  | {
      type: 'deleteTodo';
      payload: number;
    }
  | {
      type: 'toggleToDone';
      payload: number;
    }
  | {
      type: 'toggleToTodo';
      payload: number;
    };
