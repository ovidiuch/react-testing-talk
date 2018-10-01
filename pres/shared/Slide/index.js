import styled from 'styled-components';
import React, { Component } from 'react';
import { number, node, func } from 'prop-types';

export class Slide extends Component {
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
    return 1;
  }

  if (idx < selIdx) {
    return 0.4;
  }

  return 0;
}

const Container = styled.div`
  transition: opacity 1s;
  opacity: ${props => props.opacity};
`;
