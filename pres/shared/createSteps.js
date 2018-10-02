import React, { Component } from 'react';
import { number } from 'prop-types';
import { Cols } from '../../shared/style/layout';
import { Slide } from './Slide';

export function createSteps(slides) {
  return class Steps extends Component {
    static getNumSteps() {
      return slides.length;
    }

    static propTypes = {
      step: number.isRequired
    };

    static defaultProps = {
      step: 0
    };

    render() {
      const { step } = this.props;

      return (
        <Cols>
          {slides.map((slide, idx) => (
            <Slide key={idx} idx={idx} selIdx={step}>
              {slide}
            </Slide>
          ))}
        </Cols>
      );
    }
  };
}
