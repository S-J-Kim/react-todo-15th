import InputBox from './Components/InputBox';
import TodoItemContainer from './Components/TodoItemContainer';
import useTodoContext from './hooks/useTodoContext';

function App() {
  const { getDoneItems, getUndoneItems } = useTodoContext();

  return (
    <>
      <TodoItemContainer type="To-do" items={getUndoneItems()} key={'todo'} />
      <TodoItemContainer type="Done" items={getDoneItems()} key={'done'} />
      <InputBox />
    </>
  );
}

export default App;
