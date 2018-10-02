import { string, func, oneOf, arrayOf, shape } from 'prop-types';
import React, { Component } from 'react';
import {
  Header,
  Input,
  Label,
  ButtonContainer,
  Button
} from '../../shared/LoginForm';

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
        <Header>{title}</Header>
        {inputs.map(({ type, name, value, label }) => (
          <div key={name}>
            <Label htmlFor="username">{label}</Label>
            <Input
              type={type}
              id={name}
              value={value}
              disabled={status === 'loading' || status === 'success'}
              onChange={this.createInputHandler(name)}
            />
          </div>
        ))}
        <ButtonContainer>
          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Just a sec...' : submitLabel}
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
