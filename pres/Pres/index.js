import { pick, isEqual } from 'lodash';
import styled from 'styled-components';
import React, { Component } from 'react';
import { Rows } from '../../shared/style/layout';
import { H1, DarkBlue } from '../../shared/style/text';
import {
  TRANS_TIME,
  getNumSteps,
  getElementsForStep,
  getElIndexForStep,
  SliderStep
} from '../shared/steps';
import { KeyNav } from '../shared/KeyNav';
import { Emoji } from '../shared/Emoji';
import { EmojiLabel } from '../shared/EmojiLabel';
import { CodeVsTest } from '../slides/CodeVsTest';
import { Audience } from '../slides/Audience';
import { TestingPros } from '../slides/TestingPros';
import { TestingCons } from '../slides/TestingCons';
import { TestAnatomy } from '../slides/TestAnatomy';
import { LoginFormSlide } from '../slides/LoginFormSlide';
import { RefactorVisual1 } from '../slides/RefactorVisual1';

const SLIDES = [
  <H1>
    Testing <DarkBlue>React</DarkBlue> components
  </H1>,
  <H1>Why testing?</H1>,
  <CodeVsTest />,
  <H1>Audience</H1>,
  <Audience />,
  <H1>Testing pros</H1>,
  <TestingPros />,
  <H1>Testing cons</H1>,
  <TestingCons />,
  <TestAnatomy />,
  <Rows>
    <H1>
      Testing <em>vs</em> refactoring
    </H1>
    <Emoji>⚔️</Emoji>
  </Rows>,
  <LoginFormSlide />,
  <H1>Refactor #1</H1>,
  <EmojiLabel emoji="🔌" label="Replace Redux with setState" />,
  <RefactorVisual1 />
];

export class Pres extends Component {
  state = {
    step: 0,
    offsets: {}
  };

  render() {
    const { step } = this.state;
    const selIdx = getElIndexForStep(SLIDES, getSafeStep(step));

    return (
      <KeyNav onPrev={this.handlePrev} onNext={this.handleNext}>
        <Container>
          <Content style={{ marginTop: this.getMarginTop() }}>
            {getElementsForStep(SLIDES, step).map((slide, idx) => (
              <SliderStep
                key={idx}
                idx={idx}
                selIdx={selIdx}
                innerRef={this.createSlideRef(idx)}
              >
                {slide}
              </SliderStep>
            ))}
          </Content>
        </Container>
      </KeyNav>
    );
  }

  createSlideRef = idx => elRef => {
    if (!elRef) {
      return;
    }

    const elOffsets = pick(elRef, 'offsetTop', 'offsetHeight');

    if (isEqual(elOffsets, this.state.offsets[idx])) {
      return;
    }

    this.setState(({ offsets }) => ({
      offsets: {
        ...offsets,
        [idx]: elOffsets
      }
    }));
  };

  handlePrev = () => {
    this.setState({
      // TEMP: Go from first to last slide during dev
      step: this.state.step > 0 ? this.state.step - 1 : getLastStep()
      // step: getSafeStep(this.state.step - 1)
    });
  };

  handleNext = () => {
    this.setState({
      // TEMP: Go from first to last slide during dev
      step: this.state.step < getLastStep() ? this.state.step + 1 : 0
      // step: getSafeStep(this.state.step + 1)
    });
  };

  getMarginTop() {
    const { step, offsets } = this.state;
    const selIdx = getElIndexForStep(SLIDES, getSafeStep(step));

    return Object.keys(offsets).length >= SLIDES.length
      ? getOffsetTop(offsets, selIdx)
      : 0;
  }
}

function getSafeStep(step) {
  return Math.max(Math.min(step, getLastStep()), 0);
}

function getLastStep() {
  return getNumSteps(SLIDES) - 1;
}

function getOffsetTop(offsets, slideIdx) {
  const { offsetTop, offsetHeight } = offsets[slideIdx];

  return -offsetTop - Math.round(offsetHeight / 2);
}

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: margin ${TRANS_TIME};
`;
