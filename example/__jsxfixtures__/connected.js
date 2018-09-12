import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedLoginForm, formReducer } from '../ConnectedLoginForm';

const store = createStore(formReducer);

export default (
  <Provider store={store}>
    <ConnectedLoginForm />
  </Provider>
);
