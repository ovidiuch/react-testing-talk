import { string, func, oneOf } from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import { H1 } from './style/text';

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
        <Header>{getTitle(status)}</Header>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            disabled={status === 'loading' || status === 'success'}
            status={status}
            onChange={this.createInputHandler('username')}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            disabled={status === 'loading' || status === 'success'}
            status={status}
            onChange={this.createInputHandler('password')}
          />
        </div>
        <ButtonContainer>
          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Just a sec...' : 'Log in'}
          </Button>
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

export const Header = styled(H1)`
  line-height: 80px;
  margin-bottom: 48px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 512px;
  padding: 32px 48px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 30px 70px 0
      ${props =>
        props.status === 'error'
          ? 'rgba(178, 34, 34, 0.32)'
          : 'rgba(43, 81, 173, 0.16)'},
    0 10px 30px rgba(0, 0, 0, 0.08);
  font-size: 40px;
  line-height: 40px;
  background: ${props =>
    props.status === 'error' ? 'rgba(178, 34, 34, 0.1)' : 'rgb(255, 255, 255)'};
  color: ${props =>
    props.status === 'error' ? 'rgb(178, 34, 34)' : 'rgb(32, 35, 42)'};
  transition: background 0.8s, color 0.8s, box-shadow 0.8s;

  :disabled {
    color: rgba(32, 35, 42, 0.75);
  }
`;

export const Label = styled.label`
  display: block;
  margin-top: 24px;
  font-size: 40px;
  line-height: 72px;
  opacity: 0.7;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 48px;
`;

export const Button = styled.button`
  padding: 32px 48px;
  border: 0;
  border-radius: 8px;
  background: rgb(43, 81, 173);
  box-shadow: 0 30px 70px 0 rgba(43, 81, 173, 0.24),
    0 10px 30px rgba(0, 0, 0, 0.12);
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
  text-transform: uppercase;
  letter-spacing: 0.9px;
  cursor: pointer;
  transition: color 0.8s;

  :disabled {
    cursor: default;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export function getTitle(status) {
  return status === 'success'
    ? `You're in!`
    : status === 'error'
      ? 'Come again?'
      : 'Hello!';
}
