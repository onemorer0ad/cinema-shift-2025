import { AxiosRequestConfig } from 'axios';
import { api } from '../../instace';

interface RequestFilmsParams {
  config?: AxiosRequestConfig;
}

export const requestFilms = (params?: RequestFilmsParams) => {
  return api.get(`cinema/today`, params?.config);
};
