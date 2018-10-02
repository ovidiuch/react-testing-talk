import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import { Cols } from '../../shared/style/layout';
import { Slide } from './Slide';

export function createSlider(slides) {
  return class Steps extends Steps {
    static getNumSteps() {
      return slides.length;
    }

    render() {
      const { step, past } = this.props;

      return (
        <Cols>
          {slides.map((slide, idx) => (
            <Slide key={idx} idx={idx} selIdx={past ? Infinity : step}>
              {slide}
            </Slide>
          ))}
        </Cols>
      );
    }
  };
}

export class Steps extends Component {
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
