import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LandingPage from './pages/LandingPage';
import TodosPage from './pages/TodosPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/' />
        <Link to='/list' />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/todos' exact component={TodosPage} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
