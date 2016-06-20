/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';

import { selectEmail } from './selectors';

import { submitForm } from './actions';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      email: 'test',
      password: 'test',
    };
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state.email, this.state.password);
    this.props.changeRoute('/dashboard');
  }
  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input value={this.state.email} onChange={(e) => this.onEmailChange(e)} name="email" type="text" />
          <input value={this.state.password} onChange={(e) => this.onPasswordChange(e)} name="password" type="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

HomePage.propTypes = {
  submitForm: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => (
  {
    submitForm: (email, password) => dispatch(submitForm(email, password)),
    changeRoute: (url) => dispatch(push(url)),
  }
);

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

