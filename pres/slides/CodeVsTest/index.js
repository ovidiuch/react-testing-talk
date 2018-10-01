import React from 'react';
import { Cols } from '../../../shared/style/layout';
import { Steps } from '../../shared/steps';
import { EmojiLabel } from '../../shared/EmojiLabel';
import { Slide } from '../../shared/Slide';

const SLIDES = [
  <EmojiLabel emoji="😍" label="React coding" />,
  <EmojiLabel emoji="😕" label="React testing" />
];

export class CodeVsTest extends Steps {
  static getNumSteps() {
    return SLIDES.length;
  }

  render() {
    const { step } = this.props;

    return (
      <Cols>
        {SLIDES.map((slide, idx) => (
          <Slide key={idx} idx={idx} selIdx={step}>
            {slide}
          </Slide>
        ))}
      </Cols>
    );
  }
}
