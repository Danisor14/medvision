import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import ListPeople from './components/ListPeople';
import State from '../src/context/State'
import PeopleForm from './components/PeopleForm';

function App() {
  return (
      <State>
        <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={ListPeople} />
            <Route exact path="/add-people" component={PeopleForm} />
          </Switch>
        </Router>
      </State>
  );
}

export default App;
