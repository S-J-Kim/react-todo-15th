import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useSyncedState = <T>(
  key: string,
  initialValue: T | undefined = undefined
) => {
  const [storedVal, setStoredVal] = useState<T | undefined>(initialValue);
  const { getItems, setItems } = useLocalStorage<T>();

  useEffect(() => {
    if (initialValue) {
      setItems(key, initialValue);
      setStoredVal(initialValue);
    } else {
      setStoredVal(JSON.parse(getItems(key)));
    }
  }, []);

  useEffect(() => {
    setItems(key, storedVal!);
  }, [storedVal]);

  return [storedVal, setStoredVal];
};

export default useSyncedState;
