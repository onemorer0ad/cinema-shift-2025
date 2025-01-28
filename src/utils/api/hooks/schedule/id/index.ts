import { useQuery, QueryOptions } from '@tanstack/react-query';
import { requestFilmSchedule } from '@utils/api/requests';

interface RequestScheduleQueryParams {
  params: UseRequestFilmScheduleQueryProps;
  config?: QueryOptions<any, Error>; // Используем типизацию для конфигурации запроса;
}

interface UseRequestFilmScheduleQueryProps {
  id: number | string;
}

export const useRequestFilmScheduleQuery = ({
  params,
  config,
}: RequestScheduleQueryParams) =>
  useQuery<any>({
    queryKey: ['schedule', params.id],
    queryFn: () => requestFilmSchedule({ params: { id: params.id } }),
    ...config,
  });
