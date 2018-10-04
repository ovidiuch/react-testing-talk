import styled from 'styled-components';
import React from 'react';
import { FullScreen, Rows } from '../../../shared/style/layout';
import { H1, H2 } from '../../../shared/style/text';
import { Emoji } from '../../shared/Emoji';
import { StepsBase, FadeStep } from '../../shared/steps';

export class Thanks extends StepsBase {
  static getNumSteps() {
    return 6;
  }

  render() {
    const { step } = this.props;
    const finalStep = Thanks.getNumSteps() - 1;

    return (
      <Container>
        <Content>
          <FadeStep step={step} appearAt={1} brightAt={[1, finalStep]}>
            <H1>Ovidiu</H1>
          </FadeStep>
          <FadeStep step={step} appearAt={2} brightAt={[2, finalStep]}>
            <H2>Indie web developer</H2>
            <Emoji size={128}>🇷🇴</Emoji>
            <Space />
          </FadeStep>
          <FadeStep step={step} appearAt={3} brightAt={[3, finalStep]}>
            <H2>
              <Faded>twitter.com/</Faded>
              skidding
            </H2>
          </FadeStep>
          <FadeStep step={step} appearAt={4} brightAt={[4, finalStep]}>
            <H1>Thanks.</H1>
          </FadeStep>
        </Content>
      </Container>
    );
  }
}

const Container = styled(FullScreen)`
  justify-content: flex-start;
  background: #20232a url('/me.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
  background-blend-mode: lighten;
`;

const Content = styled(Rows)`
  position: absolute;
  width: 50vw;
  height: 100vh;
  padding-left: 12vw;
  color: rgb(245, 247, 249);
  align-items: flex-start;
`;

const Space = styled.div`
  height: 36px;
  flex-shrink: 0;
`;

const Faded = styled.span`
  opacity: 0.5;
  font-weight: 300;
`;
