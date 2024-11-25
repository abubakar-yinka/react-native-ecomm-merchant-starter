import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';

type Response = string[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

export const useCategories = createQuery<Response, Variables, AxiosError>({
  queryKey: ['categories'],
  fetcher: () => {
    return client
      .get(`products/categories`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error.response.data);
      });
  },
});
