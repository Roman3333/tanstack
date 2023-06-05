import { useQuery } from '@tanstack/react-query';
import { fetchTodo } from '../services/todos';

export const useTodo = (id?: string) => {
  return useQuery({
    queryFn: () => fetchTodo(id),
    queryKey: ['todos', id],
    staleTime: 1000 * 5,
    onError: (err) => {
      if (err instanceof Error) {
        alert(err.message);
      }
    },
  });
};
