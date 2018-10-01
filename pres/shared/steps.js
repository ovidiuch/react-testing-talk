import { Component, cloneElement } from 'react';
import { number } from 'prop-types';

export class Steps extends Component {
  static slides = [];

  static getNumSteps() {
    throw new Error('Implement getNumSteps');
  }

  static propTypes = {
    step: number.isRequired
  };

  static defaultProps = {
    step: 0
  };
}

export function getElementsForStep(elements, step) {
  let curStep = 0;

  return elements.reduce((acc, el) => {
    const { type } = el;

    if (typeof type.getNumSteps !== 'function') {
      curStep += 1;

      return [...acc, el];
    }

    const numSteps = type.getNumSteps();
    const relStep = step > curStep ? Math.min(step - curStep, numSteps - 1) : 0;
    curStep += numSteps;

    return [...acc, cloneElement(el, { step: relStep })];
  }, []);
}

export function getNumSteps(elements) {
  return elements.reduce((acc, el) => {
    const { getNumSteps } = el.type;

    return acc + (typeof getNumSteps === 'function' ? getNumSteps() : 1);
  }, 0);
}

export function getElIndexForStep(elements, step) {
  for (let i = 0, curStep = 0; i < elements.length; i++) {
    const { type } = elements[i];
    curStep += typeof type.getNumSteps === 'function' ? type.getNumSteps() : 1;

    if (curStep > step) {
      return i;
    }
  }
}
