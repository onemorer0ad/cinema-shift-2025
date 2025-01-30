import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.scss';
import Button from '@common/Button/Button';
import Input from '@common/Input/Input';
import { generateOtp } from '@utils/api/requests/auth/otp';
import { phoneNumberValidation } from '@utils/constants';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface AuthFormValues {
  phone: string;
}

const phoneSchema = yup.object().shape({
  phone: phoneNumberValidation,
});

const AuthPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    mode: 'onChange',
    resolver: yupResolver(phoneSchema),
  });

  const onSubmitPhone = async (data: AuthFormValues) => {
    try {
      const response = await generateOtp({ phone: data.phone });
      navigate('/verify', { state: { phone: data.phone } });
    } catch (error) {
      console.error('Ошибка при отправке кода:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitPhone)}>
        <h1>Авторизация</h1>
        <p>Введите номер телефона для входа в личный кабинет</p>
        <Input
          placeholder="Телефон"
          register={register}
          name="phone"
          errors={errors}
          required
        />
        <Button type="submit">Получить код</Button>
      </form>
    </div>
  );
};

export default AuthPage;
