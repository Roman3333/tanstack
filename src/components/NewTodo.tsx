import { FC, ChangeEvent, useState } from 'react';

import { Todo } from '../types/todo';
import { useCreateTodo } from '../hooks/useTodoCreate';

export const NewTodo: FC = () => {
  const [todo, setTodo] = useState({ text: '', title: '' });
  const { handleCreate } = useCreateTodo();

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (todo.title && todo.text) {
      const newTodo: Todo = {
        text: todo.text,
        title: todo.title,
        completed: false,
        id: Date.now().toString(),
      };
      handleCreate(newTodo);
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
