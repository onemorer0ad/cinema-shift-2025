import Input from '@common/Input/Input';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './IdentifyFormCinema.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppContext, FormDataProps } from '@utils/contexts';
import Button from '@common/Button/Button';
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  phoneNumberValidation,
} from '@utils/constants';

const loginLabelNames = [
  'lastName',
  'firstName',
  'phoneNumber',
  'email',
  'adress',
];

const schema = yup.object().shape({
  lastName: lastNameValidation,
  firstName: firstNameValidation,
  email: emailValidation,
  phoneNumber: phoneNumberValidation,
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
