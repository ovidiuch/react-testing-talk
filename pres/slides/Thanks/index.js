import styled from 'styled-components';
import React from 'react';
import { FullScreen, Rows } from '../../../shared/style/layout';
import { H1 } from '../../../shared/style/text';
import { StepsBase } from '../../shared/steps';

export class Thanks extends StepsBase {
  static getNumSteps() {
    return 1;
  }

  render() {
    return (
      <Container>
        <Content>
          <H1>Thanks</H1>
          <ul>
            <li>Ovidiu</li>
            <li>Indie web developer</li>
            <li>Romania</li>
            <li>@skidding</li>
          </ul>
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
  color: rgb(245, 247, 249);
`;
