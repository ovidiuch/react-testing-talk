import { string } from 'prop-types';
import React from 'react';
import { CodeSample } from '../../future-libs/code-sample';
import { Rows, Main } from '../../shared/style/layout';
import { H2 } from '../../shared/style/text';

// TODO: Transform and move to pres/slides
export function DeclarativeMock({ title, code }) {
  return (
    <Rows>
      <H2>{title}</H2>
      <Main>
        <CodeSample code={code} />
      </Main>
    </Rows>
  );
}

DeclarativeMock.propTypes = {
  title: string,
  code: string
};
