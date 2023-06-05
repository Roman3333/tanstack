import { FC } from 'react';
import { NewTodo, TodoViewer } from '../../components/index';

const Home: FC = () => {
  return (
    <section className="home">
      <div className="container">
        <NewTodo />
        <TodoViewer />
      </div>
    </section>
  );
};

export default Home;
