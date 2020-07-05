import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;