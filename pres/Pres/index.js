import { pick, isEqual } from 'lodash';
import styled from 'styled-components';
import React, { Component } from 'react';
import { Rows, FullScreen, Main } from '../../shared/style/layout';
import { H1, H2, P, Bullet, DarkBlue } from '../../shared/style/text';
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
import { RefactorVisual2 } from '../slides/RefactorVisual2';
import { TestDiff1 } from '../slides/TestDiff1';
import { TestDiff2 } from '../slides/TestDiff2';
import { TestDiff3 } from '../slides/TestDiff3';
import { Thanks } from '../slides/Thanks';

import { DeclarativeMock } from '../DeclarativeMock';
import {
  PROPS_SAMPLE,
  STATE_SAMPLE,
  REDUX_SAMPLE,
  STYLED_SAMPLE,
  FETCH_SAMPLE,
  LOCALSTORAGE_SAMPLE,
  WINDOW_SAMPLE
} from '../DeclarativeMock/mockSamples';

const Q = styled(H2)`
  line-height: 20vh;

  :before {
    content: 'Q: ';
    opacity: 0.4;
  }
`;

const QuoteLine = styled(P)`
  text-align: left;
  width: 1152px;
  white-space: nowrap;
`;

const SLIDES = [
  <H1>
    Testing <DarkBlue>React</DarkBlue> components
  </H1>,
  <H1>Why testing?</H1>,
  <CodeVsTest />,
  <H1>Who cares?</H1>,
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
  <Rows>
    <H1>Show me some tests!</H1>
    <Emoji>🤓</Emoji>
  </Rows>,
  <TestDiff1 />,
  <H1>Refactor #1</H1>,
  <EmojiLabel emoji="🔌" label="Replace Redux with setState" />,
  <RefactorVisual1 />,
  <TestDiff2 />,
  <H1>Refactor #2</H1>,
  <EmojiLabel emoji="🎨" label="Extract Form abstraction" />,
  <RefactorVisual2 />,
  <TestDiff3 />,
  <H1>Takeaways</H1>,
  <Bullet>Tight units slow down refactoring</Bullet>,
  <Bullet>Tech abstractions are transitory</Bullet>,
  <Bullet>Feature-oriented units are more stable</Bullet>,
  <H1>The catch</H1>,
  <EmojiLabel emoji="🎚" label="Test setup complexity" />,
  <Rows>
    <H1>f=(props, state)</H1>
    <Main>
      <Emoji>🙈</Emoji>
    </Main>
  </Rows>,
  <Rows>
    <H1>
      f=(props, state, <em>context*</em>)
    </H1>
    <Main>
      <Emoji>🤯</Emoji>
    </Main>
  </Rows>,
  <Rows>
    <H1>Component input</H1>
    <Main>
      <ul>
        <li>Props</li>
        <li>State</li>
        <li>Context (app, platform, server)</li>
      </ul>
    </Main>
  </Rows>,
  <H1>Declarative mocks</H1>,
  <DeclarativeMock title="props" code={PROPS_SAMPLE} />,
  <DeclarativeMock title="state" code={STATE_SAMPLE} />,
  <DeclarativeMock title="Redux" code={REDUX_SAMPLE} />,
  <DeclarativeMock title="styled-components" code={STYLED_SAMPLE} />,
  <DeclarativeMock title="Fetch" code={FETCH_SAMPLE} />,
  <DeclarativeMock title="LocalStorage" code={LOCALSTORAGE_SAMPLE} />,
  <DeclarativeMock title="window" code={WINDOW_SAMPLE} />,
  <H1>Recap</H1>,
  <Bullet>
    <em>Loose</em> units complicate test setup
  </Bullet>,
  <Bullet>Declarative mocks simplify test setup</Bullet>,
  <Rows style={{ marginBottom: 48 }}>
    <H1>FAQ</H1>
    <Emoji>🤔</Emoji>
  </Rows>,
  <Q>To mock or not to mock?</Q>,
  <Q>
    How about <em>shallow</em> rendering?
  </Q>,
  <Q>How to handle fail noise?</Q>,
  <Q>What level to test at?</Q>,
  <Q>{`Isn't`} this E2E testing?</Q>,
  <Q>
    {`Isn't`} this{' '}
    <a
      href="https://twitter.com/jamiebuilds/status/954927205099847680"
      target="_blank"
      rel="noopener noreferrer"
    >
      integration
    </a>{' '}
    <a
      href="https://twitter.com/kentbeck/status/938461525626437632"
      target="_blank"
      rel="noopener noreferrer"
    >
      testing
    </a>
    ?
  </Q>,
  <FullScreen>
    <Emoji>💡</Emoji>
  </FullScreen>,
  <QuoteLine>
    <em>
      {`"`}
      Although I start with the notion of the unit being a class,
      <br />I often take a bunch of closely related classes
      <br />
      and treat them as a single unit.
    </em>
  </QuoteLine>,
  <QuoteLine>
    <em>
      Rarely I might take a subset of methods in a class as a unit.
      <br />
      <strong>{`However you define [a unit] doesn't really matter.`}</strong>
    </em>
  </QuoteLine>,
  <QuoteLine>
    <em>
      The team decides what makes sense to be a unit
      <br />
      for the purposes of their understanding
      <br />
      of the system and its testing.
      {`"`}
    </em>
  </QuoteLine>,
  <P>–Martin Fowler</P>,
  <Thanks />
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
