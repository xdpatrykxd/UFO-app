import { useState } from 'react';
import { FormState } from '../types/types';
export const useFormState = (initialStateOverride?: Partial<FormState>) => {
  // The initial state
  const initialState: FormState = {
    name: '',
    contact: '',
    latitude: '',
    longitude: '',
    description: '',
    picture: '',
    status: 'unconfirmed',
    dateTime: new Date().toISOString(),
    ...initialStateOverride, // Allow overriding initial values
  };

  const [formState, setFormState] = useState<FormState>(initialState);
  
  const updateField = (field: keyof FormState, value: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const resetForm = () => setFormState(initialState);

  // Load external state (e.g., draft loading)
  const setFormStateExternal = (newState: Partial<FormState>) => {
    setFormState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return { formState, updateField, resetForm, setFormState: setFormStateExternal };
};
