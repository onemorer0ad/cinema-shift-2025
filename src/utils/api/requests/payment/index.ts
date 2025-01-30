import { AxiosRequestConfig } from 'axios';
import { api } from '@utils/api/instace';

export interface SubmitUserDataParams {
  filmId: string;
  person: {
    firstname: string;
    lastname: string;
    middlename: string;
    phone: string;
  };
  debitCard: {
    pan: string;
    expireDate: string;
    cvv: string;
  };
  seance: {
    date: string;
    time: string;
  };
  tickets: {
    row: number;
    column: number;
  }[];
  config?: AxiosRequestConfig;
}

export const submitUserData = async (data: SubmitUserDataParams) => {
  try {
    const response = await api.post('cinema/payment', data, data.config);
    console.log(response);
    return response.data; // Возвращаем только полезные данные
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
    throw error;
  }
};
