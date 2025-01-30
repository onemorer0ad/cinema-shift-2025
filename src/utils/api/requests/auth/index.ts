import { api } from '@utils/api/instace';
import { AxiosRequestConfig } from 'axios';

export interface AuthParams {
  phone: string;
  config?: AxiosRequestConfig;
}

export const authorize = async (data: AuthParams) => {
  try {
    const response = await api.post(
      'users/signin',
      { phone: data.phone },
      data.config
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при авторизации:', error);
    throw error;
  }
};
