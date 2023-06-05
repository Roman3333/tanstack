import { useEffect, FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTodo } from '../../hooks/useTodo';

const Todo: FC = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = useTodo(id);

  useEffect(() => {}, []);

  {
    isLoading && <div>Loading...</div>;
  }

  return (
    <div>
      <div>{data?.title}</div>
      <div>{data?.text}</div>
      <div>{data?.completed}</div>
    </div>
  );
};

export default Todo;
