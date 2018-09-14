import React from 'react';
import { LoginForm } from '../../LoginForm';

export default (
  <LoginForm
    status="error"
    username="franko"
    password="#fffferrari"
    onChange={(key, value) => console.log('Change', { key, value })}
    onSubmit={() => console.log('Submit')}
  />
);
