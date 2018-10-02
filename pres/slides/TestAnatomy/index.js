import styled from 'styled-components';
import { includes } from 'lodash';
import { number } from 'prop-types';
import React, { Component } from 'react';
import { Center, Rows, Cols } from '../../../shared/style/layout';
import { H1, H2 } from '../../../shared/style/text';

export class TestAnatomy extends Component {
  static getNumSteps() {
    return 17;
  }

  static propTypes = {
    step: number.isRequired
  };

  static defaultProps = {
    step: 0
  };

  render() {
    const { step } = this.props;

    const finalStep = TestAnatomy.getNumSteps() - 1;
    const setupSteps = [1, 5, 9, 10, 11];
    const actionSteps = [2, 6, 12, 13];
    const expectSteps = [3, 7, 14, 15];
    const purefnSteps = [4, 5, 6, 7, finalStep];
    const uicompSteps = [8, 9, 10, 11, 12, 13, 14, 15, finalStep];

    return (
      <Container>
        <H1>
          <Step step={step} appearAt={0} brightAt={[0, 1, 2, 3]}>
            Test anatomy
          </Step>
        </H1>
        <Body>
          <AutoRows>
            <Cell />
            <Cell>
              <H2>
                <Step step={step} appearAt={1} brightAt={setupSteps}>
                  Setup
                </Step>
              </H2>
            </Cell>
            <Cell>
              <H2>
                <Step step={step} appearAt={2} brightAt={actionSteps}>
                  Action
                </Step>
              </H2>
            </Cell>
            <Cell>
              <H2>
                <Step step={step} appearAt={3} brightAt={expectSteps}>
                  Expect
                </Step>
              </H2>
            </Cell>
          </AutoRows>
          <AutoRows>
            <Cell>
              <Header>
                <Step step={step} appearAt={4} brightAt={purefnSteps}>
                  Pure function
                </Step>
              </Header>
            </Cell>
            <Cell>
              <Step step={step} appearAt={5} brightAt={[5, finalStep]}>
                <Highlight>arguments</Highlight>
              </Step>
            </Cell>
            <Cell>
              <Step step={step} appearAt={6} brightAt={[6, finalStep]}>
                <Highlight>function call</Highlight>
              </Step>
            </Cell>
            <Cell>
              <Step step={step} appearAt={7} brightAt={[7, finalStep]}>
                <Highlight>return value</Highlight>
              </Step>
            </Cell>
          </AutoRows>
          <AutoRows>
            <Cell>
              <Header>
                <Step step={step} appearAt={8} brightAt={uicompSteps}>
                  UI component
                </Step>
              </Header>
            </Cell>
            <Cell>
              <Step step={step} appearAt={9} brightAt={[9, finalStep]}>
                <Highlight>props</Highlight>
              </Step>{' '}
              <Step step={step} appearAt={10} brightAt={[10, finalStep]}>
                <Highlight>state</Highlight>
              </Step>{' '}
              <Step step={step} appearAt={11} brightAt={[11, finalStep]}>
                <Highlight>context</Highlight>
              </Step>
            </Cell>
            <Cell>
              <Step step={step} appearAt={12} brightAt={[12, finalStep]}>
                <Highlight>render</Highlight>
              </Step>{' '}
              <Step step={step} appearAt={13} brightAt={[13, finalStep]}>
                <Highlight>user event</Highlight>
              </Step>
            </Cell>
            <Cell>
              <Step step={step} appearAt={14} brightAt={[14, finalStep]}>
                <Highlight>render output</Highlight>
              </Step>{' '}
              <Step step={step} appearAt={15} brightAt={[15, finalStep]}>
                <Highlight>side effects</Highlight>
              </Step>
            </Cell>
          </AutoRows>
        </Body>
      </Container>
    );
  }
}

const Container = styled(Rows)`
  width: 100vw;
  height: 100vh;
  background: rgb(43, 81, 173);
  color: rgb(245, 247, 249);
`;

const Body = styled(Cols)`
  width: 84vw;
  align-items: flex-start;
  font-size: 48px;
  font-weight: 300;
`;

const AutoRows = styled(Rows)`
  flex: auto;
`;

const Cell = styled(Center)`
  height: 15vh;
`;

const Header = styled(H2)`
  color: rgb(250, 200, 99);
`;

const Step = styled.span`
  opacity: ${({ step, appearAt, brightAt }) =>
    step >= appearAt ? (includes(brightAt, step) ? 1 : 0.5) : 0};
  transition: opacity 0.8s;
`;

const Highlight = styled.span`
  display: inline-block;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 8px;
  padding: 4px 16px;
  transform: rotate(${props => getRotationForString(props.children)}deg);
`;

function getRotationForString(str) {
  const MAX_ROTATION = 2;
  const GRANULARITY = 10;
  const numCharCodes = str
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((acc, next) => acc + next, 0);

  return (
    ((numCharCodes % (MAX_ROTATION * 2 * GRANULARITY)) -
      MAX_ROTATION * GRANULARITY) /
    GRANULARITY
  );
}
