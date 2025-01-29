import { useQuery } from '@tanstack/react-query';
import { requestFilms } from '../../requests';

export const useRequestFilmsQuery = () =>
  useQuery<any>({
    queryKey: ['films'],
    queryFn: () => requestFilms(),
  });
