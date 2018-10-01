import { memoize, pick } from 'lodash';
import styled from 'styled-components';
import React, { Component } from 'react';
import { H1, DarkBlue } from '../../shared/style/text';
import {
  getNumSteps,
  getElementsForStep,
  getElIndexForStep
} from '../shared/steps';
import { KeyNav } from '../shared/KeyNav';
import { Slide } from '../shared/Slide';
import { CodeVsTest } from '../slides/CodeVsTest';
import { Audience } from '../slides/Audience';

const SLIDES = [
  <H1>
    Testing <DarkBlue>React</DarkBlue> components
  </H1>,
  <H1>Why testing?</H1>,
  <CodeVsTest />,
  <H1>Audience</H1>,
  <Audience />,
  <H1>Talk summary</H1>
];

export class Pres extends Component {
  state = {
    step: 0,
    offsets: {}
  };

  render() {
    const { step } = this.state;
    const selIdx = getElIndexForStep(SLIDES, step);

    return (
      <KeyNav onPrev={this.handlePrev} onNext={this.handleNext}>
        <Container style={{ marginTop: this.getMarginTop() }}>
          {getElementsForStep(SLIDES, step).map((slide, idx) => (
            <Slide
              key={idx}
              idx={idx}
              selIdx={selIdx}
              innerRef={this.createSlideRef(idx)}
            >
              {slide}
            </Slide>
          ))}
        </Container>
      </KeyNav>
    );
  }

  createSlideRef = memoize(idx => elRef => {
    this.setState(({ offsets }) => ({
      offsets: {
        ...offsets,
        [idx]: elRef ? pick(elRef, 'offsetTop', 'offsetHeight') : undefined
      }
    }));
  });

  handlePrev = () => {
    this.setState({
      step: Math.max(this.state.step - 1, 0)
    });
  };

  handleNext = () => {
    this.setState({
      step: Math.min(this.state.step + 1, getNumSteps(SLIDES) - 1)
    });
  };

  getMarginTop() {
    const { step, offsets } = this.state;
    const selIdx = getElIndexForStep(SLIDES, step);

    return Object.keys(offsets).length === SLIDES.length
      ? getOffsetTop(offsets, selIdx)
      : 0;
  }
}

function getOffsetTop(offsets, slideIdx) {
  const { offsetTop, offsetHeight } = offsets[slideIdx];

  return -offsetTop - Math.round(offsetHeight / 2);
}

const Container = styled.div`
  position: relative;
  top: 50%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: margin 0.6s;
`;
