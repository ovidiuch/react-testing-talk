import { string, func } from 'prop-types';
import React, { Component } from 'react';

export class LoginForm extends Component {
  static propTypes = {
    username: string.isRequired,
    password: string.isRequired,
    onChange: func.isRequired,
    onSubmit: func.isRequired
  };

  render() {
    const { username, password } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
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
