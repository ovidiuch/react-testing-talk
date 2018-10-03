import styled from 'styled-components';
import React, { Component } from 'react';
import { number, node, func } from 'prop-types';
import { TRANS_TIME, LOW_OPACITY, HIGH_OPACITY } from './shared';

export class SliderStep extends Component {
  static propTypes = {
    children: node,
    idx: number.isRequired,
    selIdx: number.isRequired,
    innerRef: func
  };

  render() {
    const { children, idx, selIdx, innerRef } = this.props;

    return (
      <Container innerRef={innerRef} opacity={getSlideOpacity(idx, selIdx)}>
        {children}
      </Container>
    );
  }
}

function getSlideOpacity(idx, selIdx) {
  if (idx === selIdx) {
    return HIGH_OPACITY;
  }

  if (idx < selIdx) {
    return LOW_OPACITY;
  }

  return 0;
}

const Container = styled.div`
  transition: opacity ${TRANS_TIME};
  opacity: ${props => props.opacity};
`;
