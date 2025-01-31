import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './VerifyCodePage.module.scss';
import Button from '@common/Button/Button';
import Input from '@common/Input/Input';
import { verifyOtp } from '@utils/api/requests/auth/otp';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@utils/contexts/auth/AuthContext';

interface VerifyCodeFormValues {
  code: string;
}

const codeSchema = yup.object().shape({
  code: yup.string().required('Введите код'),
});

const VerifyCodePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone;
  const { setAuthData } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCodeFormValues>({
    mode: 'onChange',
    resolver: yupResolver(codeSchema),
  });

  const onSubmitCode = async (data: VerifyCodeFormValues) => {
    try {
      if (!phone) {
        navigate('/auth');
        return;
      }
      const response = await verifyOtp({ phone, code: data.code });
      if (response.success && response.token) {
        setAuthData(response.token, response.user);
        navigate('/');
      }
    } catch (error) {
      console.error('Ошибка при проверке кода:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitCode)}>
        <h1>Подтверждение</h1>
        <Input
          placeholder="Код подтверждения"
          register={register}
          name="code"
          errors={errors}
          required
        />
        <Button type="submit">Подтвердить</Button>
      </form>
    </div>
  );
};

export default VerifyCodePage;
