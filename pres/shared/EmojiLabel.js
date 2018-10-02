import styled from 'styled-components';
import React from 'react';
import { string } from 'prop-types';
import { Rows } from '../../shared/style/layout';
import { H2 } from '../../shared/style/text';
import { Emoji } from './Emoji';

export const EmojiLabel = ({ emoji, label }) => (
  <Root>
    <Emoji>{emoji}</Emoji>
    <Label>{label}</Label>
  </Root>
);

EmojiLabel.propTypes = {
  emoji: string.isRequired,
  label: string.isRequired
};

const Root = styled(Rows)`
  width: 384px;
  margin: 64px 0;
`;

const Label = styled(H2)`
  margin-top: 56px;
`;
