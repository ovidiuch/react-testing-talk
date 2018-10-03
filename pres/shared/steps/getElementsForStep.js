import { cloneElement } from 'react';

export function getElementsForStep(elements, step) {
  let curStep = 0;

  return elements.reduce((acc, el) => {
    const { type } = el;

    if (typeof type.getNumSteps !== 'function') {
      curStep += 1;

      return [...acc, el];
    }

    const numSteps = type.getNumSteps();
    const future = step < curStep;
    const past = step >= curStep + numSteps;
    const relStep = !future ? Math.min(step - curStep, numSteps - 1) : 0;
    curStep += numSteps;

    return [...acc, cloneElement(el, { step: relStep, past, future })];
  }, []);
}
