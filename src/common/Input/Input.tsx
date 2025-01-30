import React from 'react';
import styles from './Input.module.scss';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

// Пропсы для компонента Input
interface InputProps extends React.ComponentPropsWithRef<'input'> {
  register: UseFormRegister<any>; // Типизация register из react-hook-form
  name: string; // Имя поля
  errors: Partial<FieldErrorsImpl<any>>; // Ошибки для полей
}

type InputNames = {
  [key: string]: string;
};

const names: InputNames = {
  lastName: 'Фамилия',
  firstName: 'Имя',
  phoneNumber: 'Номер телефона',
  email: 'Email',
  adress: 'Адрес проживания',
};

const Input = ({ register, name, errors, ...rest }: InputProps) => {
  const errorMessage = errors[name]?.message as string | undefined;
  return (
    <>
      <label className={styles.label} htmlFor="FirstName">
        {names[name]}
      </label>
      <input className={styles.field} {...register(name)} {...rest} />
      <p className={styles.errorMsg}>{errorMessage}</p>
    </>
  );
};

export default Input;
