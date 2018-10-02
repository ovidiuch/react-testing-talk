import React from 'react';
import { createSlider } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const Audience = createSlider([
  <EmojiLabel emoji="😶" label="No testing" />,
  <EmojiLabel emoji="🤕" label="Testing pain" />,
  <EmojiLabel emoji="😇" label="Testing bliss" />
]);
