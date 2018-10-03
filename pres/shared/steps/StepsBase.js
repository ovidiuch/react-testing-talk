import { Component } from 'react';
import { number, bool } from 'prop-types';

export class StepsBase extends Component {
  static getNumSteps() {
    throw new Error('getNumSteps not implemented');
  }

  static propTypes = {
    step: number.isRequired,
    future: bool.isRequired,
    past: bool.isRequired
  };

  static defaultProps = {
    step: 0,
    future: false,
    past: false
  };
}
