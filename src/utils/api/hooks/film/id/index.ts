import { useQuery, QueryOptions } from '@tanstack/react-query';
import { requestFilm } from '../../../requests/film/id';

interface RequestQueryParams {
  params: UseRequestFilmQueryProps;
  config?: QueryOptions<any, Error>; // Используем типизацию для конфигурации запроса;
}

interface UseRequestFilmQueryProps {
  id: number | string;
}

const key = 'film';

export const useRequestFilmQuery = ({ params, config }: RequestQueryParams) => {
  const queryKey = [key, params.id];
  return useQuery<any>({
    queryKey: queryKey,
    queryFn: () => requestFilm({ params: { id: params.id } }),
    ...config,
  });
};
