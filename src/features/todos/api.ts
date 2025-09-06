import { http } from '@/lib/axios';
import { z } from 'zod';
import type { Todo } from './types';

export async function fetchTodos(): Promise<Todo[]> {
  const res = await http.get<Todo[]>('/todos?_limit=5');
  // Example runtime validation with zod (optional)
  const schema = z.array(
    z.object({
      userId: z.number(),
      id: z.number(),
      title: z.string(),
      completed: z.boolean(),
    }),
  );
  return schema.parse(res.data);
}

export async function createTodo(title: string): Promise<Todo> {
  const res = await http.post<Todo>('/todos', { title, completed: false, userId: 1 });
  return res.data;
}
