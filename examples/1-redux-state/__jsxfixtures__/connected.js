import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedLoginForm } from '../ConnectedLoginForm';
import { createStore } from '../store';

const store = createStore({
  status: 'pending',
  username: 'franko',
  password: '#fffferrari'
});

export default (
  <Provider store={store}>
    <ConnectedLoginForm />
  </Provider>
);
