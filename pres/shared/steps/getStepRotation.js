import { LOW_OPACITY, HIGH_OPACITY } from './shared';

export function getStepRotation({ str, opacity, deg = 2, granularity = 15 }) {
  const numCharCodes = str
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((acc, next) => acc + next, 0);

  const targetDeg =
    ((numCharCodes % (deg * 2 * granularity)) - deg * granularity) /
    granularity;

  // Rotate while fading in
  return (
    targetDeg * (HIGH_OPACITY / LOW_OPACITY) * Math.min(opacity, LOW_OPACITY)
  );
}
