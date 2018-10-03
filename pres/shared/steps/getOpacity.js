import { includes } from 'lodash';
import { HIGH_OPACITY, LOW_OPACITY } from './shared';

export function getOpacity({ step, appearAt, brightAt = [appearAt] }) {
  return step >= appearAt
    ? includes(brightAt, step)
      ? HIGH_OPACITY
      : LOW_OPACITY
    : 0;
}
