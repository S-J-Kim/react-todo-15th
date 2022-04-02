import { IUseInputArg, TodoContextHandler } from '../Interfaces/interface';
import useInput from './useInput';

const useForm = (inititalValue: IUseInputArg, handler: TodoContextHandler) => {
  const { inputBindings, setValue } = useInput(inititalValue);
  const { value, onChange } = inputBindings;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.replace(/\s+/g, '')) {
      handler(value);
      setValue('');
    }
  };

  return { onSubmit, value, onChange };
};

export default useForm;
