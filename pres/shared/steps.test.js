import React from 'react';
import { H1, DarkBlue } from '../../shared/style/text';
import { getElementsForStep, getNumSteps, getElIndexForStep } from './steps';
import { CodeVsTest } from '../slides/CodeVsTest';

const SLIDES = [
  <H1>
    Testing <DarkBlue>React</DarkBlue> components
  </H1>,
  <H1>Why testing?</H1>,
  <CodeVsTest />,
  <H1>Audience</H1>
];

it('returns elements for step', () => {
  expect(getElementsForStep(SLIDES, 0)).toEqual([
    <H1>
      Testing <DarkBlue>React</DarkBlue> components
    </H1>,
    <H1>Why testing?</H1>,
    <CodeVsTest step={0} />,
    <H1>Audience</H1>
  ]);

  expect(getElementsForStep(SLIDES, 1)).toEqual([
    <H1>
      Testing <DarkBlue>React</DarkBlue> components
    </H1>,
    <H1>Why testing?</H1>,
    <CodeVsTest step={0} />,
    <H1>Audience</H1>
  ]);

  expect(getElementsForStep(SLIDES, 2)).toEqual([
    <H1>
      Testing <DarkBlue>React</DarkBlue> components
    </H1>,
    <H1>Why testing?</H1>,
    <CodeVsTest step={0} />,
    <H1>Audience</H1>
  ]);

  expect(getElementsForStep(SLIDES, 3)).toEqual([
    <H1>
      Testing <DarkBlue>React</DarkBlue> components
    </H1>,
    <H1>Why testing?</H1>,
    <CodeVsTest step={1} />,
    <H1>Audience</H1>
  ]);

  expect(getElementsForStep(SLIDES, 4)).toEqual([
    <H1>
      Testing <DarkBlue>React</DarkBlue> components
    </H1>,
    <H1>Why testing?</H1>,
    <CodeVsTest step={1} />,
    <H1>Audience</H1>
  ]);
});

it('returns element index at step', () => {
  expect(getElIndexForStep(SLIDES, 0)).toEqual(0);
  expect(getElIndexForStep(SLIDES, 1)).toEqual(1);
  expect(getElIndexForStep(SLIDES, 2)).toEqual(2);
  expect(getElIndexForStep(SLIDES, 3)).toEqual(2);
  expect(getElIndexForStep(SLIDES, 4)).toEqual(3);
});

it('returns step count', () => {
  expect(getNumSteps(SLIDES)).toBe(5);
});
