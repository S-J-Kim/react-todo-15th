import { Dispatch } from 'react';
import { TodoAction } from './actions';

export type TodoItem = {
  id: number;
  content: string;
  done: boolean;
};

export type TodoList = TodoItem[];

export interface ITodoCtx {
  todoList: TodoList;
  todoDispatch: Dispatch<TodoAction>;
}

export interface ITodoItemProps {
  item: TodoItem;
}

export interface ITodoContainerProps {
  type: 'To-Do' | 'Done';
  items: TodoList;
}

export type IInitValueArg<T> = T;

export type IUseInputArg = IInitValueArg<string>;

export interface ITextNeedFnArg {
  (text: string): void;
}

export interface IIdNeedFnArg {
  (id: number): void;
}

export type TodoContextHandler = ITextNeedFnArg;
