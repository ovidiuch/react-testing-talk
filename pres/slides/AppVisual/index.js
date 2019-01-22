import React from 'react';
import { Center, Cols } from '../../../shared/style/layout';
import { StepsBase } from '../../shared/steps';
import { BoxStep } from '../../shared/BoxStep';

export class AppVisual extends StepsBase {
  static getNumSteps() {
    return 6;
  }

  render() {
    const { step } = this.props;

    const finalStep = AppVisual.getNumSteps() - 1;

    return (
      <Center>
        <BoxStep
          title="ReduxProvider"
          step={step}
          appearAt={0}
          brightAt={[0, finalStep]}
        >
          <BoxStep
            title="ConnectedLoginForm"
            step={step}
            appearAt={1}
            brightAt={[1, finalStep]}
          >
            <BoxStep
              title="LoginForm"
              step={step}
              appearAt={2}
              brightAt={[2, finalStep]}
            />
          </BoxStep>
          <Cols>
            <BoxStep
              title="actions"
              step={step}
              appearAt={3}
              brightAt={[3, finalStep]}
            />
            <BoxStep
              title="reducer"
              step={step}
              appearAt={4}
              brightAt={[4, finalStep]}
            />
          </Cols>
        </BoxStep>
      </Center>
    );
  }
}
