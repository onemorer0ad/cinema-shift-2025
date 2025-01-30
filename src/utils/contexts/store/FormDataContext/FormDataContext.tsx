import { React } from 'react';
import { createContext, useState, ReactNode, useContext } from 'react';

export interface FormDataProps {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  adress: string;
}

export interface FormDataContextProps {
  formData: FormDataProps;
  setFormData: (data: FormDataProps) => void;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    adress: '',
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormDataContext);
  if (!context)
    throw new Error('useFormContext must be used within FormDataProvider');
  return context;
};
