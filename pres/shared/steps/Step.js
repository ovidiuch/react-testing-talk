import styled from 'styled-components';
import { TRANS_TIME } from './shared';
import { getOpacity } from './getOpacity';
import { getStepRotation } from './getStepRotation';

export const FadeStep = styled.div`
  opacity: ${props => getOpacity(props)};
  transition: opacity ${TRANS_TIME};
`;

export const RotateStep = styled(FadeStep)`
  transform: rotate(
    ${props =>
      getStepRotation({ str: props.children, opacity: getOpacity(props) })}deg
  );
  transition: opacity ${TRANS_TIME}, transform ${TRANS_TIME};
`;
