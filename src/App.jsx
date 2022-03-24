import InputBox from './Components/InputBox';
import { useContext } from 'react';
import { TodoContext } from './Contexts/TodoContextProvider';

function App() {
  const { todoList, todoDispatch } = useContext(TodoContext);

  const handleClick = (id, state) => {
    const actionType = state ? 'toggleToTodo' : 'toggleToDone';
    todoDispatch({ type: actionType, payload: id });
  };

  return (
    <div>
      todos:
      {todoList
        .filter((item) => !item.done)
        .map((item, idx) => {
          return (
            <div key={idx} onClick={() => handleClick(item.id, item.done)}>
              {item.content}
            </div>
          );
        })}
      <InputBox />
      dones:
      {todoList
        .filter((item) => item.done)
        .map((item, idx) => {
          return (
            <div
              key={idx + 1000}
              onClick={() => handleClick(item.id, item.done)}
            >
              {item.content}
            </div>
          );
        })}
    </div>
  );
}

export default App;
