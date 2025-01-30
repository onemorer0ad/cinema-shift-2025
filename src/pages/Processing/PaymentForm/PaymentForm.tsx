import React from 'react';
import styles from './PaymentForm.module.scss';
import * as Yup from 'yup';
import valid from 'card-validator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@common/Button/Button';
import { useSelectedSeatContext } from '@utils/contexts/store/SelectedSeatsContext';
import { useSeance } from '@utils/contexts/store/SeanceContext';
import { useFormContext } from '@utils/contexts/store/FormDataContext';
import { useSubmitUserDataMutation } from '@utils/api/hooks/payment';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().test(
    'test-number',
    'Credit Card number is invalid',
    (value) => valid.number(value).isValid
  ),
  cardDate: Yup.string()
    .test(
      'test-date',
      'Неверный срок действия',
      (value) => valid.expirationDate(value).isValid
    )
    .required('Это поле обязательно для заполнения'),
  cardCVV: Yup.string()
    .test(
      'test-cvv',
      'Неверный CVV',
      (value) => valid.cvv(value, 3).isValid || valid.cvv(value, 4).isValid
    )
    .required('Это поле обязательно для заполнения'),
});

const PaymentForm = () => {
  const { selectedSeatsData, setSelectedSeatsData } = useSelectedSeatContext();
  const { seanceInfo, setSeanceInfo } = useSeance();
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isPending, isError } = useSubmitUserDataMutation({
    onSuccess: (data) => {
      console.log(data);
      reset();
      navigate(`/success`);
    },
    onError: (error) => {
      if (error.code === 'auth/email-already-in-use') {
        setError(
          'email',
          { type: 'custom', message: 'email already in use' },
          { shouldFocus: true }
        );
      }
      console.log(error);
    },
  });

  const transformedSeats = selectedSeatsData.selectedSeats.map((seat) => ({
    row: seat.seatId,
    column: seat.id,
  }));

  const onSubmitHandler = (cardInfo: any) => {
    const userData = {
      filmId: seanceInfo.filmId,
      person: {
        firstname: formData.firstName,
        lastname: formData.lastName,
        middlename: formData.email,
        phone: formData.phoneNumber,
      },
      debitCard: {
        pan: cardInfo.cardNumber,
        expireDate: cardInfo.cardDate,
        cvv: cardInfo.cardCVV,
      },
      seance: {
        date: seanceInfo.seance.date,
        time: seanceInfo.seance.time,
      },
      tickets: transformedSeats,
    };
    mutate(userData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Введите данные карты для оплаты</h2>
      <form
        className={styles.paymentForm}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className={styles.inputGroup}>
          <div className={styles.formGroup}>
            <label>Номер*</label>

            <input
              type="text"
              className={styles.input}
              disabled={isPending}
              placeholder="0000 0000"
              {...register('cardNumber')}
              aria-invalid={errors.cardNumber ? 'true' : 'false'}
            />
            <p>{errors.cardNumber?.message}</p>
          </div>
          <div className={styles.bottomButtons}>
            <div className={styles.formGroup}>
              <label>Срок*</label>
              <input
                type="text"
                disabled={isPending}
                placeholder="00/00"
                className={styles.input}
                {...register('cardDate')}
                aria-invalid={errors.cardDate ? 'true' : 'false'}
              />
              <p>{errors.cardDate?.message}</p>
            </div>
            <div className={styles.formGroup}>
              <label>CVV*</label>
              <input
                type="password"
                disabled={isPending}
                placeholder="0000"
                className={styles.input}
                {...register('cardCVV')}
                aria-invalid={errors.cardCVV ? 'true' : 'false'}
              />
              <p>{errors.cardCVV?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <Button type="button" className={styles.backButton}>
            Назад
          </Button>
          <Button
            disabled={isPending}
            type="submit"
            className={styles.payButton}
          >
            Оплатить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
