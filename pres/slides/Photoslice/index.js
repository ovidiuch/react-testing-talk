import styled from 'styled-components';
import React from 'react';
import { FullScreen } from '../../../shared/style/layout';
import { StepsBase } from '../../shared/steps';

export class Photoslice extends StepsBase {
  static getNumSteps() {
    return 1;
  }

  render() {
    return <Container />;
  }
}

const Container = styled(FullScreen)`
  justify-content: flex-start;
  background: #1e1e1e url('/photoslice.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
