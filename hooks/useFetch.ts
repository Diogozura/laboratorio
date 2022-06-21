import useSWR from 'swr'
import { api } from '../src/services/api';


export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api(url);

    return response.data;
  })

  return { data, error, mutate }
}