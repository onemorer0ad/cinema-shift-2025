import * as yup from 'yup';

export const emailValidation = yup
  .string()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i, 'Invalid email address')
  .required('Email is required');
