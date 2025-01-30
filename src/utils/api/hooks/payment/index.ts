import { useMutation } from '@tanstack/react-query';
import {
  submitUserData,
  SubmitUserDataParams,
} from '@utils/api/requests/payment';

export const useSubmitUserDataMutation = (rest: any) => {
  return useMutation({
    mutationFn: (values: SubmitUserDataParams) => {
      console.log(values);
      return submitUserData(values);
    },
    ...rest,
  });
};
