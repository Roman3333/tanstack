import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useToggleTodo } from '../hooks/useTodoToggle';
import { useDeleteTodo } from '../hooks/useTodoDelete';
import { Todo } from '../types/todo';

export const TodoItem: FC<Todo> = ({ completed, id, title, text }) => {
  const { handleToggle } = useToggleTodo();
  const { handleDelete } = useDeleteTodo();

  return (
    <li style={{ marginBottom: '10px' }}>
      <div>
        <input type="checkbox" checked={completed} onChange={() => handleToggle(id, completed)} />
        <span>{title}</span>
        <span>{text}</span>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <Link to={`/todos/${id}`}>More</Link>
      </div>
    </li>
  );
};
