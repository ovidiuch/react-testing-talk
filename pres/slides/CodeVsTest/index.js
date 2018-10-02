import React from 'react';
import { createSteps } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const CodeVsTest = createSteps([
  <EmojiLabel emoji="😍" label="React coding" />,
  <EmojiLabel emoji="😕" label="React testing" />
]);
