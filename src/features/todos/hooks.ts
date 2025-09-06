import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodo, fetchTodos } from './api';

export function useTodos() {
  const qc = useQueryClient();
  const list = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });
  const add = useMutation({
    mutationFn: createTodo,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  });
  return { list, add };
}
