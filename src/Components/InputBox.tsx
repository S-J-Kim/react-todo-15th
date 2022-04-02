import styled from 'styled-components';
import useForm from '../hooks/useForm';
import useTodoContext from '../hooks/useTodoContext';

const InputBox = () => {
  const { addNewTodo } = useTodoContext();
  const { onSubmit, ...inputAttrs } = useForm('', addNewTodo);

  return (
    <InputWrapper onSubmit={onSubmit}>
      <TodoInput {...inputAttrs} />
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
