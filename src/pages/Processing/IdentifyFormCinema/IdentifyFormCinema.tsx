import Input from '@common/Input/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './IdentifyFormCinema.module.scss';

const loginLabelNames = ['Фамилия', 'Имя', 'Номер телефона', 'Email', 'Адрес'];

const IdentifyFormCinema = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onChange',
  });

  return (
    <>
      <form
        className={styles.form}
        // onSubmit={handleSubmit((values) => mutate(values))}
      >
        <h1 className={styles.title}>Введите ваши данные</h1>
        {loginLabelNames.map((name) => {
          return (
            <Input
              key={name}
              placeholder={name}
              register={register}
              name={name}
              errors={errors}
              //   disabled={isPending}
            />
          );
        })}
        <div className="mt-8">
          <input
            // disabled={isPending ? true : false}
            className={styles.button}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default IdentifyFormCinema;
