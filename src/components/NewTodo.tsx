import { FC, ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../services/todos';
import { Todo } from '../types/todo';

export const NewTodo: FC = () => {
  const [todo, setTodo] = useState({ text: '', title: '' });
  const client = useQueryClient();

  const { mutate: create } = useMutation({
    mutationFn: createTodo,
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

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (todo.title && todo.text) {
      const newTodo: Todo = {
        text: todo.text,
        title: todo.title,
        completed: false,
        id: Date.now().toString(),
      };
      create(newTodo);
      setTodo({
        text: '',
        title: '',
      });
    }
  };

  return (
    <form onSubmit={submit}>
      <label>
        Title:
        <input
          type="text"
          value={todo.title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTodo({ ...todo, title: event.target.value })
          }
        />
      </label>
      <br />
      <label>
        Text:
        <input
          type="text"
          value={todo.text}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTodo({ ...todo, text: event.target.value })
          }
        />
      </label>
      <br />
      <button type="submit">Add todo</button>
    </form>
  );
};
