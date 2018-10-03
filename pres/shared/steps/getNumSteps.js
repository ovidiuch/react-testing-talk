export function getNumSteps(elements) {
  return elements.reduce((acc, el) => {
    const { getNumSteps } = el.type;

    return acc + (typeof getNumSteps === 'function' ? getNumSteps() : 1);
  }, 0);
}
