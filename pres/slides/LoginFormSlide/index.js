import React from 'react';
import { FullScreen } from '../../../shared/style/layout';
import { LoginForm } from '../../../shared/LoginForm';
import { Steps } from '../../shared/createSteps';

const baseProps = {
  status: 'pending',
  username: '',
  password: '',
  onChange: () => {},
  onSubmit: () => {}
};

const SLIDES = [
  { ...baseProps },
  {
    ...baseProps,
    status: 'loading',
    username: 'franko',
    password: '#fffferrari'
  },
  {
    ...baseProps,
    status: 'error',
    username: 'franko',
    password: '#fffferrari'
  }
];

export class LoginFormSlide extends Steps {
  static getNumSteps() {
    return SLIDES.length;
  }

  render() {
    const { step } = this.props;

    return (
      <FullScreen>
        <LoginForm {...SLIDES[step]} />
      </FullScreen>
    );
  }
}
