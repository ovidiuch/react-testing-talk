import testMetadata from '../../../test.metadata.json';
import { createTestDiff } from '../../shared/TestDiff';

export const TestDiff1 = createTestDiff({
  tests: testMetadata['1-redux-state'],
  prevTests: testMetadata['1-redux-state']
});
