import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AppRouting from './components/admin/home/appRouting';
import AdminRouting from './components/admin/home/adminRouting';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin">
          <Protected Cmp={AdminRouting} />
        </Route>
        <Route path="/">
          <Protected Cmp={AppRouting} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
