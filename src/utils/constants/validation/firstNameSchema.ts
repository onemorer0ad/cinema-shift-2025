import * as yup from 'yup';

export const firstNameValidation = yup
  .string()
  .matches(/^[A-Za-zА-Яа-я ]*$/, 'Некорректный формат')
  .max(40, 'Name must not exceed 40 characters')
  .required('Name is required');
