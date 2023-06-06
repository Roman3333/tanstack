import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../services/todos';

export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  const toggleTodoMutation = useMutation(
    (params: { id: string; completed: boolean }) => toggleTodoStatus(params.id, params.completed),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']);
      },
      onError: (error: Error) => {
        console.error(error.message);
        alert('Failed to update todo status');
      },
    },
  );

  const handleToggle = (id: string, completed: boolean) => {
    toggleTodoMutation.mutate({ id, completed: !completed });
  };

  return { handleToggle };
};
