import Input from '@common/Input/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './IdentifyFormCinema.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@common/Button/Button';
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  phoneNumberValidation,
} from '@utils/constants';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useFormContext,
  FormDataProps,
} from '@utils/contexts/store/FormDataContext';
import { useSelectedSeatContext } from '@utils/contexts/store/SelectedSeatsContext';
import { useSeance } from '@utils/contexts/store/SeanceContext';

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
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();
  const { filmId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataProps>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: FormDataProps) => {
    setFormData(data);
    reset();
    navigate(`/processing/form/${filmId}`);
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
