import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { retry } from '../../future-libs/async-retry';
import { ConnectedLoginForm } from '../ConnectedLoginForm';
import { createStore } from '../ConnectedLoginForm/store';

const getTestData = ({ status = 'pending' } = {}) => {
  const store = createStore({
    status,
    username: 'franko',
    password: '#fffferrari'
  });
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedLoginForm />
    </Provider>
  );

  return { wrapper };
};

const getUserInput = wrapper => wrapper.find('input#username');
const getPassInput = wrapper => wrapper.find('input#password');

const submitForm = form => form.prop('onSubmit')({ preventDefault: jest.fn() });

it('renders input field', () => {
  const { wrapper } = getTestData();
  const input = getUserInput(wrapper);

  expect(input).toHaveLength(1);
  expect(input.prop('value')).toBe('franko');
});

it('renders password field', () => {
  const { wrapper } = getTestData();
  const input = getPassInput(wrapper);

  expect(input).toHaveLength(1);
  expect(input.prop('value')).toBe('#fffferrari');
});

it('renders loading state', async () => {
  // TODO: Mock fetch
  const { wrapper } = getTestData();
  submitForm(wrapper.find('form'));

  expect(wrapper.text()).toMatch('Loading...');
});

it('renders error state', async () => {
  // TODO: Mock fetch
  const { wrapper } = getTestData();
  submitForm(wrapper.find('form'));

  await retry(() => {
    expect(wrapper.text()).toMatch('Oh no.');
  });
});

// TODO: Success path
// it('renders success state', async () => {
//   // TODO: Mock fetch
//   const { wrapper } = getTestData();
//   submitForm(wrapper.find('form'));
//
//   await retry(() => {
//     expect(wrapper.text()).toMatch('Success.');
//   });
// });
