import { string, func, oneOf } from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import { P, H1 } from './style/text';

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
        <H1>Hello!</H1>
        {status === 'loading' && msg('Loading...')}
        {status === 'success' && msg('Success!')}
        {status === 'error' && msg('Oh no.')}
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={this.createInputHandler('username')}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={this.createInputHandler('password')}
          />
        </div>
        <ButtonContainer>
          <Button type="submit">Log in</Button>
        </ButtonContainer>
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
    <P>
      <strong>{msg}</strong>
    </P>
  );
}

const Input = styled.input`
  box-sizing: border-box;
  width: 256px;
  padding: 16px 24px;
  border: 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 15px 35px 0 rgba(43, 81, 173, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.04);
  line-height: 20px;
`;

const Label = styled.label`
  display: block;
  margin-top: 12px;
  line-height: 36px;
  opacity: 0.7;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 16px 24px;
  border: 0;
  border-radius: 4px;
  background: rgb(43, 81, 173);
  box-shadow: 0 15px 35px 0 rgba(43, 81, 173, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.45px;
  cursor: pointer;
`;
