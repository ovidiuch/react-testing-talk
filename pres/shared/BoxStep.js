import { number, string, element, arrayOf, oneOfType } from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { Rows } from '../../shared/style/layout';
import { H2 } from '../../shared/style/text';
import { TRANS_TIME, getOpacity, getStepRotation } from './steps';

export function BoxStep({ children, title, step, appearAt, brightAt }) {
  const opacity = getOpacity({ step, appearAt, brightAt });

  return (
    <BoxContainer title={title} opacity={opacity} rotSeed={title + appearAt}>
      <BoxTitle opacity={opacity}>{title}</BoxTitle>
      {children && <BoxChildren>{children}</BoxChildren>}
    </BoxContainer>
  );
}

BoxStep.propTypes = {
  title: string.isRequired,
  children: oneOfType([element, arrayOf(element)]),
  step: number.isRequired,
  appearAt: number.isRequired,
  brightAt: arrayOf(number).isRequired
};

const BoxContainer = styled(Rows)`
  margin: 32px;
  margin-top: 0;
  background: rgba(255, 255, 255, ${props => props.opacity});
  border: 6px solid rgba(45, 114, 178, ${props => props.opacity});
  border-radius: 24px;
  box-shadow: 0 15px 35px 0 rgba(45, 114, 178, ${props => props.opacity * 0.16}),
    0 5px 15px rgba(0, 0, 0, ${props => props.opacity * 0.08});
  transform: rotate(
    ${props =>
      getStepRotation({
        str: props.rotSeed,
        opacity: props.opacity
      })}deg
  );
  transition: border ${TRANS_TIME}, box-shadow ${TRANS_TIME},
    transform ${TRANS_TIME};
`;

const BoxTitle = styled(H2)`
  padding: 24px 32px;
  font-weight: 400;
  color: rgba(45, 114, 178, ${props => props.opacity});
  transition: color ${TRANS_TIME};
`;

const BoxChildren = styled(Rows)`
  margin-top: 16px;
`;
