export type TodoAction =
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
