const useLocalStorage = <T>() => {
  const getItems = (key: string): string => {
    const storedItem: string | null = localStorage.getItem(key);

    if (storedItem) {
      return storedItem;
    }

    throw new Error(`Cannot find data in localStorage using key '${key}'!`);
  };

  const setItems = (key: string, items: T): void => {
    localStorage.setItem(key, JSON.stringify(items));
  };

  return { getItems, setItems };
};

export default useLocalStorage;
