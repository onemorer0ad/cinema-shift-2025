import React from 'react';
import styles from './PaymentForm.module.scss';

const PaymentForm = () => {
  return (
    <div className={styles.paymentForm}>
      <h2>Введите данные карты для оплаты</h2>
      <div className={styles.formGroup}>
        <label>Номер*</label>
        <input type="text" placeholder="0000 0000" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label>Срок*</label>
        <input type="text" placeholder="00/00" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label>CVV*</label>
        <input type="text" placeholder="000" className={styles.input} />
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.backButton}>Назад</button>
        <button className={styles.payButton}>Оплатить</button>
      </div>
    </div>
  );
};

export default PaymentForm;
