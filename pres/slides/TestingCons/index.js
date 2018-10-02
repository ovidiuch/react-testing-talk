import React from 'react';
import { createSteps } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const TestingCons = createSteps([
  <EmojiLabel emoji="⌨️" label="More typing" />,
  <EmojiLabel emoji="⏳" label="Less agility" />
]);
