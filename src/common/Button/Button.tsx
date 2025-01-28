import React, { ComponentProps } from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick }: ComponentProps<'button'>) => {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      {children}
    </button>
  );
};

export default Button;
