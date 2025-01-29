import React, { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'contained';
}

const Button = ({ children, variant = 'contained', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, variant && styles[variant])}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
