import React, { Component } from 'react';
import { LoginForm } from './LoginForm';

export class StatefulLoginForm extends Component {
  state = {
    status: 'pending',
    username: '',
    password: ''
  };

  render() {
    const { status, username, password } = this.state;

    return (
      <LoginForm
        status={status}
        username={username}
        password={password}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleSubmit = () => {
    const { username, password } = this.state;

    // TODO: Fetch request
    console.log({ username, password });
  };
}
