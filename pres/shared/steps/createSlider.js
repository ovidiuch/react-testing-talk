import React from 'react';
import { Cols } from '../../../shared/style/layout';
import { SliderStep } from './SliderStep';
import { StepsBase } from './StepsBase';

export function createSlider(slides) {
  return class Slider extends StepsBase {
    static getNumSteps() {
      return slides.length;
    }

    render() {
      const { step, past } = this.props;

      return (
        <Cols>
          {slides.map((slide, idx) => (
            <SliderStep key={idx} idx={idx} selIdx={past ? Infinity : step}>
              {slide}
            </SliderStep>
          ))}
        </Cols>
      );
    }
  };
}
