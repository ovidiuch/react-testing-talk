import styled from 'styled-components';
import React from 'react';
import { Cols } from '../../../shared/style/layout';
import { StepsBase, FadeStep } from '../../shared/steps';
import { Emoji } from '../../shared/Emoji';
import { BoxStep } from '../../shared/BoxStep';

export class RefactorVisual2 extends StepsBase {
  static getNumSteps() {
    return 8;
  }

  render() {
    const { step } = this.props;

    const finalStep = RefactorVisual2.getNumSteps() - 1;

    return (
      <Cols>
        <BoxStep
          title="StatefulLoginForm"
          step={step}
          appearAt={1}
          brightAt={[1, finalStep - 1, finalStep]}
        >
          <BoxStep
            title="LoginForm"
            step={step}
            appearAt={2}
            brightAt={[2, finalStep]}
          />
        </BoxStep>
        <FadeStep step={step} appearAt={0} brightAt={[0, finalStep]}>
          <Arrow>
            <Emoji>➡</Emoji>
          </Arrow>
        </FadeStep>
        <BoxStep
          title="StatefulLoginForm"
          step={step}
          appearAt={3}
          brightAt={[3, finalStep - 1, finalStep]}
        >
          <BoxStep
            title="LoginForm"
            step={step}
            appearAt={4}
            brightAt={[4, finalStep]}
          >
            <BoxStep
              title="Form"
              step={step}
              appearAt={5}
              brightAt={[5, finalStep]}
            />
          </BoxStep>
        </BoxStep>
      </Cols>
    );
  }
}

const Arrow = styled.div`
  margin: 0 64px;
`;
