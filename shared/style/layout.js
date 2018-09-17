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

export const Main = styled.div`
  margin-top: 64px;
`;

export const RowSeparator = styled.div`
  width: 64px;
`;
