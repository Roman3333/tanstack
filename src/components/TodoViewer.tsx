import { useState, FC } from 'react';
import { TodoState } from '../types/todo';
import { TodoList } from './TodoList';

export const TodoViewer: FC = () => {
  const [view, setView] = useState<TodoState>('all');

  return (
    <div>
      <div>
        <button onClick={() => setView('all')} className={view === 'all' ? 'selected' : ''}>
          all
        </button>
        <button onClick={() => setView('open')} className={view === 'open' ? 'selected' : ''}>
          open
        </button>
        <button
          onClick={() => setView('completed')}
          className={view === 'completed' ? 'selected' : ''}>
          completed
        </button>
      </div>

      <TodoList state={view} />
    </div>
  );
};
