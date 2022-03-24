import { useState } from 'react';
import styled from 'styled-components';
import useTodoContext from '../hooks/useTodoContext';

const InputBox = () => {
  const { addNewTodo } = useTodoContext();
  const [val, setVal] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewTodo(val);
    setVal('');
  };

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <TodoInput onChange={(e) => setVal(e.target.value)} value={val} />
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
