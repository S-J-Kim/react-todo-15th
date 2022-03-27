import useInput from './useInput';

const useForm = (inititalValue, handler) => {
  const { value, onChange, setValue } = useInput(inititalValue);

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.replace(/\s+/g, '')) {
      handler(value);
      setValue('');
    }
  };

  return { onSubmit, value, onChange };
};

export default useForm;
