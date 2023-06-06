import axios from 'axios';
import { Todo, TodoState } from '../types/todo';

const BASE = 'http://localhost:4000/todos';

export async function fetchTodos(state: TodoState = 'all'): Promise<Todo[]> {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;

  const res = await axios.get(`${BASE}/${queries}`);

  if (res.status !== 200) {
    throw new Error('Failed to fetch todos!');
  }

  return res.data;
}

export async function fetchTodo(todoId?: string): Promise<Todo> {
  const res = await axios.get(`${BASE}/${todoId}`);

  if (res.status !== 200) {
    throw new Error(`Failed to fetch todo with id ${todoId}!`);
  }

  return res.data;
}

export async function toggleTodoStatus(todoId: string, completed: boolean) {
  const res = await axios.patch(`${BASE}/${todoId}`, { completed });

  if (res.status !== 200) {
    throw new Error(`Failed to toggle todo status with id ${todoId}!`);
  }

  return res.data;
}

export async function createTodo(todo: Todo) {
  const res = await axios.post(BASE, todo);

  if (res.status !== 201) {
    throw new Error('Failed to create todo!');
  }

  return res.data;
}

export async function deleteTodo(todoId: string): Promise<any> {
  const res = await axios.delete(`${BASE}/${todoId}`);

  if (res.status !== 200) {
    throw new Error(`Failed to delete todo with id ${todoId}!`);
  }

  return res.data;
}
