import React from 'react';
import { StateMock } from '@react-mock/state';
import { StatefulLoginForm } from '../StatefulLoginForm';

export default (
  <StateMock
    state={{
      status: 'pending',
      username: 'franko',
      password: '#fffferrari'
    }}
  >
    <StatefulLoginForm />
  </StateMock>
);
