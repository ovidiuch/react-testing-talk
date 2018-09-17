import React from 'react';
import { LoginForm } from '../../../../shared/LoginForm';

export default (
  <LoginForm
    status="loading"
    username="franko"
    password="#fffferrari"
    onChange={(key, value) => console.log('Change', { key, value })}
    onSubmit={() => console.log('Submit')}
  />
);
