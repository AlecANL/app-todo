import { useState } from 'react';

export function useForm(initialState = {}) {
  const [values, setInputValues] = useState(initialState);

  function handleInputChange(event) {
    setInputValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return [values, handleInputChange];
}
