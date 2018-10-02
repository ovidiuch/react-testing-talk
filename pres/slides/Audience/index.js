import React from 'react';
import { createSteps } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const Audience = createSteps([
  <EmojiLabel emoji="😶" label="No testing" />,
  <EmojiLabel emoji="🤕" label="Testing pain" />,
  <EmojiLabel emoji="😇" label="Testing bliss" />
]);
