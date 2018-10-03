import styled from 'styled-components';
import React from 'react';
import { Center, Rows, Cols } from '../../../shared/style/layout';
import { H1, H2 } from '../../../shared/style/text';
import { StepsBase, FadeStep, RotateStep } from '../../shared/steps';

export class TestAnatomy extends StepsBase {
  static getNumSteps() {
    return 17;
  }

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
          <FadeStep step={step} appearAt={0} brightAt={[0, 1, 2, 3]}>
            Test anatomy
          </FadeStep>
        </H1>
        <Body>
          <AutoRows>
            <Cell />
            <Cell>
              <H2>
                <FadeStep step={step} appearAt={1} brightAt={setupSteps}>
                  Setup
                </FadeStep>
              </H2>
            </Cell>
            <Cell>
              <H2>
                <FadeStep step={step} appearAt={2} brightAt={actionSteps}>
                  Action
                </FadeStep>
              </H2>
            </Cell>
            <Cell>
              <H2>
                <FadeStep step={step} appearAt={3} brightAt={expectSteps}>
                  Expect
                </FadeStep>
              </H2>
            </Cell>
          </AutoRows>
          <AutoRows>
            <Cell>
              <Header>
                <FadeStep step={step} appearAt={4} brightAt={purefnSteps}>
                  Pure function
                </FadeStep>
              </Header>
            </Cell>
            <Cell>
              <HlStep step={step} appearAt={5} brightAt={[5, finalStep]}>
                arguments
              </HlStep>
            </Cell>
            <Cell>
              <HlStep step={step} appearAt={6} brightAt={[6, finalStep]}>
                function call
              </HlStep>
            </Cell>
            <Cell>
              <HlStep step={step} appearAt={7} brightAt={[7, finalStep]}>
                return value
              </HlStep>
            </Cell>
          </AutoRows>
          <AutoRows>
            <Cell>
              <Header>
                <FadeStep step={step} appearAt={8} brightAt={uicompSteps}>
                  UI component
                </FadeStep>
              </Header>
            </Cell>
            <Cell>
              <HlStep step={step} appearAt={9} brightAt={[9, finalStep]}>
                props
              </HlStep>{' '}
              <HlStep step={step} appearAt={10} brightAt={[10, finalStep]}>
                state
              </HlStep>{' '}
              <HlStep step={step} appearAt={11} brightAt={[11, finalStep]}>
                context
              </HlStep>
            </Cell>
            <Cell>
              <HlStep step={step} appearAt={12} brightAt={[12, finalStep]}>
                render
              </HlStep>{' '}
              <HlStep step={step} appearAt={13} brightAt={[13, finalStep]}>
                user event
              </HlStep>
            </Cell>
            <Cell>
              <HlStep step={step} appearAt={14} brightAt={[14, finalStep]}>
                render output
              </HlStep>{' '}
              <HlStep step={step} appearAt={15} brightAt={[15, finalStep]}>
                side effects
              </HlStep>
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

const HlStep = styled(RotateStep)`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 8px;
  padding: 4px 16px;
`;
