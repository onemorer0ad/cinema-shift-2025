import React from 'react';
import styles from './Input.module.scss';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

// Пропсы для компонента Input
interface InputProps extends React.ComponentPropsWithRef<'input'> {
  register: UseFormRegister<any>; // Типизация register из react-hook-form
  name: string; // Имя поля
  errors: Partial<FieldErrorsImpl<any>>; // Ошибки для полей
}

const Input = ({ register, name, errors, ...rest }: InputProps) => {
  // const errorMessage = errors[name]?.message as string | undefined;
  return (
    <>
      <label className={styles.label} htmlFor="FirstName">
        {name}
      </label>
      <input className={styles.field} {...register(name)} {...rest} />
      {/* <p className={styles.errorMsg}>{errorMessage}</p> */}
    </>
  );
};

export default Input;
