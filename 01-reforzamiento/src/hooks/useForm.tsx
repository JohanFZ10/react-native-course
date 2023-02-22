import {useState} from 'react';
const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChangeHandler = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onChangeHandler
  }
};

export default useForm;
