import styled from 'styled-components';
import { useContext, useState } from 'react';
import { TodoContext } from '../Contexts/TodoContextProvider';

const InputBox = () => {
  const { todoDispatch } = useContext(TodoContext);
  const [val, setVal] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    todoDispatch({ type: 'newTodo', payload: val });
  };

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <TodoInput onChange={(e) => setVal(e.target.value)} />
      <AddButton>add</AddButton>
    </InputWrapper>
  );
};

const InputWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TodoInput = styled.input`
  flex: 1;
`;

const AddButton = styled.button``;

export default InputBox;
