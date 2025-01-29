import { AxiosRequestConfig } from 'axios';
import { api } from '../../../instace';

interface RequestFilmParams {
  params: { id: number | string };
  config?: AxiosRequestConfig;
}

export const requestFilm = ({ params, config }: RequestFilmParams) => {
  return api.get(`cinema/film/${params.id}`, config);
};
