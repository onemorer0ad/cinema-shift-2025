import Input from '@common/Input/Input';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './IdentifyFormCinema.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppContext, FormDataProps } from '@utils/contexts';
import Button from '@common/Button/Button';

const loginLabelNames = [
  'lastName',
  'firstName',
  'phoneNumber',
  'email',
  'adress',
];

const schema = yup.object().shape({
  lastName: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я ]*$/, 'Некорректный формат')
    .max(40, 'Name must not exceed 40 characters')
    .required('Name is required'),
  firstName: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я ]*$/, 'Некорректный формат')
    .max(40, 'Name must not exceed 40 characters')
    .required('Name is required'),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      'Invalid email address'
    )
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Некорректный формат'
    ),
});
const IdentifyFormCinema = () => {
  const context = useContext(AppContext);
  if (!context) return;
  const { formData, setFormData } = context;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataProps>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  console.log(formData);
  const onSubmitHandler = (data: FormDataProps) => {
    setFormData(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h1 className={styles.title}>Введите ваши данные</h1>
      {loginLabelNames.map((name) => (
        <Input
          key={name}
          placeholder={name}
          register={register}
          name={name}
          errors={errors}
          required
          //   disabled={isPending}
        />
      ))}
      <div className="mt-8">
        <Button type="submit">Продолжить</Button>
      </div>
    </form>
  );
};

export default IdentifyFormCinema;
