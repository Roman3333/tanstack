import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/todos';
import { TodoState } from '../types/todo';

export const useTodos = (state: TodoState) => {
  return useQuery({
    queryFn: () => fetchTodos(state),
    queryKey: ['todos', state],
    staleTime: 1000 * 5,
    onError: (err) => {
      if (err instanceof Error) {
        alert(err.message);
      }
    },
  });
};
