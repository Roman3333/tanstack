import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createTodo } from '../services/todos';
import { Todo } from '../types/todo';

export const useCreateTodo = () => {
  const client = useQueryClient();

  const createTodoMutation = useMutation((todo: Todo) => createTodo(todo), {
    // onSuccess: () => {
    // client.invalidateQueries({ queryKey: ['todos', 'all'] });
    // },
    onSuccess: (newTodo: Todo) => {
      client.setQueriesData<Todo[]>(['todos', 'all'], (oldTodos) => {
        return [...(oldTodos || []), newTodo];
      });
      client.invalidateQueries({
        queryKey: ['todos', 'all'],
        refetchType: 'none',
      });
    },
  });

  const handleCreate = (todo: Todo) => {
    createTodoMutation.mutate(todo);
  };

  return { handleCreate };
};
