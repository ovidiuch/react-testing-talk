import { string, func, oneOf } from 'prop-types';
import React, { Component } from 'react';
import { getTitle } from '../../shared/LoginForm';
import { Form } from './Form';

export class LoginForm extends Component {
  static propTypes = {
    status: oneOf(['pending', 'loading', 'success', 'error']).isRequired,
    username: string.isRequired,
    password: string.isRequired,
    onChange: func.isRequired,
    onSubmit: func.isRequired
  };

  render() {
    const { status, username, password, onChange, onSubmit } = this.props;

    return (
      <Form
        title={getTitle(status)}
        status={status}
        inputs={[
          {
            type: 'text',
            name: 'username',
            value: username,
            label: 'Username'
          },
          {
            type: 'password',
            name: 'password',
            value: password,
            label: 'Password'
          }
        ]}
        onChange={onChange}
        onSubmit={onSubmit}
        submitLabel="Log in"
      />
    );
  }
}
