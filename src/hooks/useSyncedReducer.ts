import { Reducer, useReducer } from 'react';
import useSyncedState from './useSyncedState';

const useSyncedReducer = <T, A>(
  key: string,
  reducer: Reducer<T, A>,
  initialState?: T
) => {
  const [storedValue, setValue] = useSyncedState(key, initialState);

  return useReducer<Reducer<T, A>>((state: T, action: A) => {
    const newState = reducer(state, action);
    setValue(newState);

    return newState;
  }, storedValue!);
};

export default useSyncedReducer;
