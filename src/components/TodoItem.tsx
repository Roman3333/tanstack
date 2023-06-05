import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../services/todos';
import { Todo } from '../types/todo';

export const TodoItem: FC<Todo> = ({ completed, id, title, text }) => {
  const client = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries(['todos']),
  });

  return (
    <li style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" checked={completed} onChange={() => toggle()} />
        <span
          style={{ marginRight: '0.5rem', textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </span>
        <span style={{ marginRight: '0.5rem' }}>{text}</span>
        <button style={{ marginRight: '0.5rem' }}>Delete</button>
        <Link to={`/todos/${id}`}>More</Link>
      </div>
    </li>
  );
};
