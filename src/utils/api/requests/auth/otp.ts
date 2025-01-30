import { api } from '@utils/api/instace';
import { AxiosRequestConfig } from 'axios';

export interface OtpParams {
  phone: string;
  config?: AxiosRequestConfig;
}

interface OtpResponse {
  code: string;
  success: boolean;
}

export const generateOtp = async (data: OtpParams) => {
  try {
    const response = await api.post(
      'auth/otp',
      { phone: data.phone },
      data.config
    );
    return response.data as OtpResponse;
  } catch (error) {
    console.error('Ошибка при генерации OTP:', error);
    throw error;
  }
};

export const verifyOtp = async (data: OtpParams & { code: string }) => {
  try {
    const response = await api.post(
      'users/signin',
      {
        phone: data.phone,
        code: data.code,
      },
      data.config
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при верификации OTP:', error);
    throw error;
  }
};
