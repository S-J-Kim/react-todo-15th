import { useState } from 'react';
import { IUseInputArg } from '../Interfaces/interface';

const useInput = (initialValue: IUseInputArg) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { inputBindings: { value, onChange }, setValue };
};

export default useInput;
