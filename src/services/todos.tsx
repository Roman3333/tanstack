import { Todo, TodoState } from '../types/todo';

const BASE = 'http://localhost:4000/todos';

export async function fetchTodos(state: TodoState = 'all'): Promise<Todo[]> {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;

  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) throw new Error('Failed to fetch todos!');

  return res.json();
}

export async function toggleTodoStatus(todoId: string, completed: boolean) {
  const res = await fetch(`${BASE}/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function createTodo(todo: Todo) {
  const res = await fetch(BASE, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function fetchTodo(todoId?: string): Promise<Todo> {
  const res = await fetch(`${BASE}/${todoId}`);

  if (!res.ok) throw new Error(`Failed to fetch todo with id ${todoId}!`);

  return res.json();
}
