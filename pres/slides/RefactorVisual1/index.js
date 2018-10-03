import styled from 'styled-components';
import React from 'react';
import { Cols } from '../../../shared/style/layout';
import { StepsBase, FadeStep } from '../../shared/steps';
import { Emoji } from '../../shared/Emoji';
import { BoxStep } from '../../shared/BoxStep';

export class RefactorVisual1 extends StepsBase {
  static getNumSteps() {
    return 10;
  }

  render() {
    const { step } = this.props;

    const finalStep = RefactorVisual1.getNumSteps() - 1;

    return (
      <Cols>
        <BoxStep
          title="ReduxProvider"
          step={step}
          appearAt={1}
          brightAt={[1, finalStep]}
        >
          <BoxStep
            title="ConnectedLoginForm"
            step={step}
            appearAt={2}
            brightAt={[2, finalStep]}
          >
            <BoxStep
              title="LoginForm"
              step={step}
              appearAt={3}
              brightAt={[3, 8, finalStep]}
            />
          </BoxStep>
          <Cols>
            <BoxStep
              title="actions"
              step={step}
              appearAt={4}
              brightAt={[4, finalStep]}
            />
            <BoxStep
              title="reducer"
              step={step}
              appearAt={5}
              brightAt={[5, finalStep]}
            />
          </Cols>
        </BoxStep>
        <FadeStep step={step} appearAt={0} brightAt={[0, finalStep]}>
          <Arrow>
            <Emoji>➡</Emoji>
          </Arrow>
        </FadeStep>
        <BoxStep
          title="StatefulLoginForm"
          step={step}
          appearAt={6}
          brightAt={[6, finalStep]}
        >
          <BoxStep
            title="LoginForm"
            step={step}
            appearAt={7}
            brightAt={[7, 8, finalStep]}
          />
        </BoxStep>
      </Cols>
    );
  }
}

const Arrow = styled.div`
  margin: 0 64px;
`;
