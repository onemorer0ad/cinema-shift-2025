import { AxiosRequestConfig } from 'axios';
import { api } from '../../../instace';

interface RequestFilmScheduleParams {
  params: { id: number | string };
  config?: AxiosRequestConfig;
}

export const requestFilmSchedule = ({
  params,
  config,
}: RequestFilmScheduleParams) => {
  return api.get(`cinema/film/${params.id}/schedule`, { ...config });
};
