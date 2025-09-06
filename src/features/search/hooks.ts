import { useMutation, useQueryClient } from '@tanstack/react-query';
import { search } from './api';

export function useSearch() {
  const qc = useQueryClient();
  const add = useMutation({
    mutationFn: search,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['search'] }),
  });
  return { add };
}
