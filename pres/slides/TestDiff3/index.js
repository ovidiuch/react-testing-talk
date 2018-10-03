import testMetadata from '../../../test.metadata.json';
import { createTestDiff } from '../../shared/TestDiff';

export const TestDiff3 = createTestDiff({
  tests: testMetadata['3-generic-form'],
  prevTests: testMetadata['2-component-state']
});
