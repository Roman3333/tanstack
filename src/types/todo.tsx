export type TodoState = 'all' | 'open' | 'completed';

export type Todo = {
  id: string;
  completed: boolean;
  title: string;
  text: string;
};
