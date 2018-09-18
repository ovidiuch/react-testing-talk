import React from 'react';
import { TestComparison } from '..';
import testMetadata from '../../../test.metadata.json';

export default (
  <TestComparison tests={testMetadata['1-redux-state']} title="Redux state" />
);
