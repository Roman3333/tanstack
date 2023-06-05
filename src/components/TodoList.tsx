import { FC } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoState } from '../types/todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  state: TodoState;
};

export const TodoList: FC<TodoListProps> = ({ state }) => {
  const { data, isLoading, isSuccess } = useTodos(state);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <ul>{isSuccess && data.map((todo) => <TodoItem key={todo.id} {...todo} />)}</ul>;
};
