import { sortBy, isEqual } from 'lodash';

export function getUnchangedCats({ tests, prevTests }) {
  return sort(
    Object.keys(tests).filter(
      cat => prevTests[cat] && isEqual(tests[cat], prevTests[cat])
    )
  );
}

export function getAddedCats({ tests, prevTests }) {
  return sort(
    Object.keys(tests).filter(
      cat => !prevTests[cat] || !isEqual(tests[cat], prevTests[cat])
    )
  );
}

export function getRemovedCats({ tests, prevTests }) {
  return sort(
    Object.keys(prevTests).filter(
      cat => !tests[cat] || !isEqual(tests[cat], prevTests[cat])
    )
  );
}

const order = ['form', 'loginForm', 'reducer', 'actions', 'connect'];

function sort(cats) {
  return sortBy(cats, cat => order.indexOf(cat));
}
