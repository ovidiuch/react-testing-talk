import styled from 'styled-components';
import { string } from 'prop-types';
import React from 'react';
import { CodeSample } from '../../../future-libs/code-sample';
import { Rows } from '../../../shared/style/layout';
import { H2 } from '../../../shared/style/text';

export function DeclarativeMock({ title, code }) {
  return (
    <Container>
      <Title>{title}</Title>
      <CodeSample code={code} />
    </Container>
  );
}

DeclarativeMock.propTypes = {
  title: string,
  code: string
};

const Container = styled(Rows)`
  margin: 32px 0;
`;

const Title = styled(H2)`
  line-height: 128px;
`;
