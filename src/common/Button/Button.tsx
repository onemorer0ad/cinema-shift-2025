import React, { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'contained';
  type?: 'submit' | 'button';
  navigate?: number;
  className?: string;
}

const Button = ({
  children,
  type = 'button',
  variant = 'contained',
  navigate,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const router = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (navigate !== undefined) {
      router(navigate);
    }
    onClick?.(e);
  };

  return (
    <button
      {...props}
      className={clsx(styles.button, variant && styles[variant], className)}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
