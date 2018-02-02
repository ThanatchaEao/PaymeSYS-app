import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/main.scss';
import Home from './Home';
import Login from './Login';
import AttendeeHome from './Attendee/Home'
import NavLayout from './nav-layout';

class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    role: PropTypes.string,
  };

  static defaultProps = {
    role: '',
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const route = (
      <NavLayout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/attendee/home" component={AttendeeHome} />
          <Redirect to={{ pathname: '/home' }} />
        </Switch>
      </NavLayout>
      );


    return (
      <BrowserRouter>
        <div style={{ height: '100%' }}>
          {route}
        </div>
      </BrowserRouter>

    );
  }

}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
  role: state.authReducer.role,
});

const Container = connect(mapStateToProps)(App);
export default Container;
