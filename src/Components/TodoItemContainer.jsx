import styled from 'styled-components';
import SingleTodoItem from './SingleTodoItem';

const TodoItemContainer = ({ type, items }) => {
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
