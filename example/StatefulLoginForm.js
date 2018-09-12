import React, { Component } from 'react';
import { LoginForm } from './LoginForm';

export class StatefulLoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    const { username, password } = this.state;

    return (
      <LoginForm
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
