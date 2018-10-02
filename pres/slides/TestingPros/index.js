import React from 'react';
import { createSlider } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const TestingPros = createSlider([
  <EmojiLabel emoji="🧐" label="Clarity" />,
  <EmojiLabel emoji="😎" label="Confidence" />,
  <EmojiLabel emoji="🚨" label="Regression" />
]);
