import React, { Component } from 'react';
import { LoginForm } from '../1-redux-state/LoginForm';

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

  handleSubmit = async () => {
    this.setState({ status: 'loading' });

    try {
      const { username, password } = this.state;
      const body = JSON.stringify({ username, password });
      const res = await fetch('/login', { method: 'POST', body });

      if (res.status !== 200) {
        throw new Error('Unauthorized');
      }

      this.setState({ status: 'success' });
    } catch (err) {
      this.setState({ status: 'error' });
    }
  };
}
