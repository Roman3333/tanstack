import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTodo } from '../../hooks/useTodo';

const Todo: FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useTodo(id);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div>{data?.title}</div>
      <div>{data?.text}</div>
      <div>{data?.completed}</div>
    </div>
  );
};

export default Todo;
