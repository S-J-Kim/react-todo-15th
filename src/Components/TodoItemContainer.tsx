import styled from 'styled-components';
import SingleTodoItem from './SingleTodoItem';
import { ITodoContainerProps } from '../Interfaces/interface';

const TodoItemContainer = ({ type, items }: ITodoContainerProps) => {
  return (
    <section>
      <ContainerHeader>
        {type} ({items.length})
      </ContainerHeader>
      <ItemListContainer>
        {items.map((item) => {
          return <SingleTodoItem item={item} key={item.id} />;
        })}
      </ItemListContainer>
    </section>
  );
};

const ContainerHeader = styled.h1``;

const ItemListContainer = styled.ul``;

export default TodoItemContainer;
