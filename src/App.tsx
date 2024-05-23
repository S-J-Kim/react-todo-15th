import InputBox from './Components/InputBox';
import TodoItemContainer from './Components/TodoItemContainer';
import useTodoContext from './hooks/useTodoContext';

function App() {
  const { getDoneItems, getUndoneItems } = useTodoContext();

  return (
    <>
      <TodoItemContainer type={'To-Do'} items={getUndoneItems()} key={'todo'} />
      <TodoItemContainer type={'Done'} items={getDoneItems()} key={'done'} />
      <InputBox />
      <img src='https://oscar-apprunner-demo.s3.amazonaws.com/github.png'/>
    </>
  );
}

export default App;
