import styled from 'styled-components';
import React from 'react';
import { Rows } from '../../../shared/style/layout';
import { H1, H2 } from '../../../shared/style/text';
import { StepsBase, FadeStep } from '../../shared/steps';
import { Emoji } from '../../shared/Emoji';

export class ComponentInput extends StepsBase {
  static getNumSteps() {
    return 9;
  }

  render() {
    const { step } = this.props;
    const finalStep = ComponentInput.getNumSteps() - 1;

    return (
      <Container>
        <H1>
          f(props, state
          {step > 0 ? (
            <>
              , <em>context*</em>)
            </>
          ) : (
            ')'
          )}
        </H1>
        <Emoji>{step === 0 ? '🙈' : step < finalStep ? '🙉' : '🤯'}</Emoji>
        <Label>
          <FadeStepInline step={step} appearAt={2} brightAt={[2, finalStep]}>
            * shared app state
          </FadeStepInline>
          <FadeStepInline step={step} appearAt={3} brightAt={[3, finalStep]}>
            , style theme
          </FadeStepInline>
          <FadeStepInline step={step} appearAt={4} brightAt={[4, finalStep]}>
            , locale
          </FadeStepInline>
          <FadeStepInline step={step} appearAt={5} brightAt={[5, finalStep]}>
            ,<br />
            server data
          </FadeStepInline>
          <FadeStepInline step={step} appearAt={6} brightAt={[6, finalStep]}>
            , browser cache
          </FadeStepInline>
          <FadeStepInline step={step} appearAt={7} brightAt={[7, finalStep]}>
            , window size...
          </FadeStepInline>
        </Label>
      </Container>
    );
  }
}

const Container = styled(Rows)`
  height: 100vh;
`;

const Label = styled(H2)`
  margin-top: 56px;
  line-height: 1.5em;
`;

// NOTE: It might be a good default for FadeStep to use span, but it's too
// close to the presentation to change something across all slides.
const FadeStepInline = FadeStep.withComponent('span');
