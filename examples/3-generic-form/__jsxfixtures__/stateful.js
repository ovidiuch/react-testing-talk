import React from 'react';
import { ComponentState } from 'react-cosmos-fixture';
import { StatefulLoginForm } from '../StatefulLoginForm';

export default (
  <ComponentState
    state={{
      status: 'pending',
      username: 'franko',
      password: '#fffferrari'
    }}
  >
    <StatefulLoginForm />
  </ComponentState>
);
