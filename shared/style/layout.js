import styled from 'styled-components';

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rows = styled(Center)`
  flex-direction: column;
`;

export const Cols = styled(Center)`
  flex-direction: row;
`;

export const FullScreen = styled(Center)`
  width: 100vw;
  height: 100vh;
`;

export const Space = styled.div`
  height: ${props => props.height}px;
  flex-shrink: 0;
`;
