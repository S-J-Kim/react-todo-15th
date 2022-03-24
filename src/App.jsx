import InputBox from './Components/InputBox';
import TodoItemContainer from './Components/TodoItemContainer';
import useTodoContext from './hooks/useTodoContext';

function App() {
  const { getDoneItems, getUndoneItems } = useTodoContext();

  return (
    <>
      <TodoItemContainer type="To-do" items={getUndoneItems()} />
      <TodoItemContainer type="Done" items={getDoneItems()} />
      <InputBox />
    </>
  );
}

export default App;
