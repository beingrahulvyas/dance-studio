import React, { lazy, Suspense } from 'react';
import './App.css';
import Layout from './hoc/Layout';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Layout>
      <Suspense fallback={"Loading..."}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
