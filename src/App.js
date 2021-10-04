import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AdminRouting from './components/admin/home/adminRouting';
import AppRouting from './components/admin/home/appRouting';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={AdminRouting} />
        <Route path="/" component={AppRouting} /> 
      </Switch>
    </div>
  );
}

export default App;
