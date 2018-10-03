import testMetadata from '../../../test.metadata.json';
import { createTestDiff } from '../../shared/TestDiff';

export const TestDiff2 = createTestDiff({
  tests: testMetadata['2-component-state'],
  prevTests: testMetadata['1-redux-state']
});
