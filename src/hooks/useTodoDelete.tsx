import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '../services/todos';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation((id: string) => deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error: Error) => {
      console.error(error.message);
      alert('Failed to delete todo');
    },
  });

  const handleDelete = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  return { handleDelete };
};
