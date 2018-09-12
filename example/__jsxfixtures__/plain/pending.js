import React from 'react';
import { LoginForm } from '../../LoginForm';

export default (
  <LoginForm
    status="pending"
    username="franko"
    password="#fffferrari"
    onChange={(key, value) => console.log('Change', { key, value })}
    onSubmit={() => console.log('Submit')}
  />
);
