import React from 'react';
import { Cols, ColSeparator } from '../../shared/style/layout';
import { Emoji } from '../Emoji';
import { Box } from '.';

export const refactor1 = (
  <Cols>
    <ColSeparator />
    <Box title="ReduxProvider">
      <Box title="ConnectedLoginForm">
        <Box title="LoginForm" />
      </Box>
      <Box title="actions" />
      <Box title="reducer" />
    </Box>
    <ColSeparator />
    <Emoji>👉</Emoji>
    <ColSeparator />
    <Box title="StatefulLoginForm">
      <Box title="LoginForm" />
    </Box>
    <ColSeparator />
  </Cols>
);

export const refactor2 = (
  <Cols>
    <ColSeparator />
    <Box title="StatefulLoginForm">
      <Box title="LoginForm" />
    </Box>
    <ColSeparator />
    <Emoji>👉</Emoji>
    <ColSeparator />
    <Box title="StatefulLoginForm">
      <Box title="LoginForm">
        <Box title="Form" />
      </Box>
    </Box>
    <ColSeparator />
  </Cols>
);
