import React from 'react';
import { createSteps } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const TestingPros = createSteps([
  <EmojiLabel emoji="🧐" label="Clarity" />,
  <EmojiLabel emoji="😎" label="Confidence" />,
  <EmojiLabel emoji="🚨" label="Regression" />
]);
