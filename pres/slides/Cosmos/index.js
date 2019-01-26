import styled from 'styled-components';
import React from 'react';
import { FullScreen } from '../../../shared/style/layout';
import { StepsBase } from '../../shared/steps';

export class Cosmos extends StepsBase {
  static getNumSteps() {
    return 1;
  }

  render() {
    return <Container />;
  }
}

const Container = styled(FullScreen)`
  justify-content: flex-start;
  background: #161824 url('/cosmos.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
