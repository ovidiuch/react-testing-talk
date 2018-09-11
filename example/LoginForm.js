import React, { Component } from 'react';

export class PureLoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    const { username, password } = this.state;

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

  createInputHandler = name => e => {
    this.setState({
      [name]: e.currentTarget.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    console.log({ username, password });
  };
}

export const LoginForm = PureLoginForm;
