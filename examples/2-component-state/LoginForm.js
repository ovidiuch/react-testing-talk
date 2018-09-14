// NOTE: Auto copied from 1-redux-state/__tests__/tight.component.js.
// Don't edit by hand! Edit source and run `yarn copy-example-files` instead.
import { string, func, oneOf } from 'prop-types';
import React, { Component } from 'react';

export class LoginForm extends Component {
  static propTypes = {
    status: oneOf(['pending', 'loading', 'success', 'error']).isRequired,
    username: string.isRequired,
    password: string.isRequired,
    onChange: func.isRequired,
    onSubmit: func.isRequired
  };

  render() {
    const { status, username, password } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        {status === 'loading' && msg('Loading...')}
        {status === 'success' && msg('Success!')}
        {status === 'error' && msg('Oh no.')}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.createInputHandler('username')}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.createInputHandler('password')}
          />
        </div>
        <div>
          <button type="submit">Go</button>
        </div>
      </form>
    );
  }

  createInputHandler = key => e => {
    this.props.onChange(key, e.currentTarget.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit();
  };
}

function msg(msg) {
  return (
    <p>
      <strong>{msg}</strong>
    </p>
  );
}
