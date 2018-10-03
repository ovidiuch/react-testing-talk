export function getElIndexForStep(elements, step) {
  for (let i = 0, curStep = 0; i < elements.length; i++) {
    const { type } = elements[i];
    curStep += typeof type.getNumSteps === 'function' ? type.getNumSteps() : 1;

    if (curStep > step) {
      return i;
    }
  }
}
