import { api } from '../../instace';

export const requestFilms = () => {
  return api.get(`cinema/today`);
};
