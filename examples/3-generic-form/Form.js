import { string, func, oneOf, arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import { P, H1 } from '../../shared/style/text';

export class Form extends Component {
  static propTypes = {
    title: string.isRequired,
    status: oneOf(['pending', 'loading', 'success', 'error']).isRequired,
    inputs: arrayOf(
      shape({
        type: oneOf(['text', 'password']),
        name: string,
        value: string,
        label: string
      })
    ).isRequired,
    submitLabel: string.isRequired,
    onChange: func.isRequired,
    onSubmit: func.isRequired
  };

  render() {
    const { title, status, inputs, submitLabel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <H1>{title}</H1>
        {status === 'loading' && msg('Loading...')}
        {status === 'success' && msg('Success!')}
        {status === 'error' && msg('Oh no.')}
        {inputs.map(({ type, name, value, label }) => (
          <div key={name}>
            <Label htmlFor="username">{label}</Label>
            <Input
              type={type}
              id={name}
              value={value}
              onChange={this.createInputHandler(name)}
            />
          </div>
        ))}
        <ButtonContainer>
          <Button type="submit">{submitLabel}</Button>
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
