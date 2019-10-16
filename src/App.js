import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/about/About.js';
import Budgets from './components/budgets/Budgets.js';
import Bills from './components/bills/Bills.js';
import Header from './components/layout/Header.js';
import Investments from './components/invest/Investments.js';
import Dashboard from './components/dashboard/Dashboard.js';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';



import './App.css';

const App = () =>{
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/budgets" component={Budgets} />
        <Route path="/investments" component={Investments} />
        <Route path="/bills" component={Bills} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;





