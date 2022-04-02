import styled from 'styled-components';
import useTodoContext from '../hooks/useTodoContext';
import { ITodoItemProps } from '../Interfaces/interface';

const SingleTodoItem = ({ item }: ITodoItemProps) => {
  const { id, content, done } = item;
  const { deleteTodo, doneItem, undoneItem } = useTodoContext();

  const handleTodoItemClick = (id: number) => {
    const handler = done ? undoneItem : doneItem;

    handler(id);
  };

  return (
    <TodoItemWrapper>
      <TodoItemContent done={done} onClick={() => handleTodoItemClick(id)}>
        {content}
      </TodoItemContent>
      <DeleteButton onClick={() => deleteTodo(id)}>×</DeleteButton>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const TodoItemContent = styled.span`
  flex: 1;

  text-decoration: ${({ done }: { done: boolean }) => {
    return done ? 'line-through' : 'none';
  }};
  color: ${({ done }) => {
    return done ? 'grey' : 'black';
  }};

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.4);
  }
`;

export default SingleTodoItem;
