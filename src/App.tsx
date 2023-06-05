import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Spinner } from './components/index';
const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const Todo = React.lazy(() => import('./pages/todo/Todo'));
const NotFound = React.lazy(() => import('./pages/notFound/NotFound'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="todos/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <Todo />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Spinner />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
