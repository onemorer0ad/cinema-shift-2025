import { useQuery, QueryOptions } from '@tanstack/react-query';
import { requestFilm } from '../../../requests/film/id';

interface RequestQueryParams {
  params: UseRequestFilmQueryProps;
  config?: QueryOptions<any, Error>; // Используем типизацию для конфигурации запроса;
}

interface UseRequestFilmQueryProps {
  id: number | string;
}

export const useRequestFilmQuery = ({ params, config }: RequestQueryParams) =>
  useQuery<any>({
    queryKey: ['film', params.id],
    queryFn: () => requestFilm({ params: { id: params.id } }),
    ...config,
  });
