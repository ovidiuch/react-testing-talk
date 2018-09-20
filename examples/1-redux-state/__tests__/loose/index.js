import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import retry from '@skidding/async-retry';
import { delay } from '../../../../future-libs/delay';
import { ConnectedLoginForm } from '../../ConnectedLoginForm';
import { createStore } from '../../store';

const getTestData = () => {
  const wrapper = mount(
    <Provider store={createStore()}>
      <ConnectedLoginForm />
    </Provider>
  );

  return { wrapper };
};

const getInput = (wrapper, inputId) => wrapper.find(`input#${inputId}`);

const changeInput = (wrapper, inputId, value) => {
  getInput(wrapper, inputId).prop('onChange')({
    currentTarget: { value }
  });
  wrapper.update();
};

const submitForm = wrapper =>
  wrapper.find('form').prop('onSubmit')({ preventDefault: jest.fn() });

const getLastCallBody = (url, method) =>
  JSON.parse(fetchMock.lastCall(url, method)[1].body);

afterEach(fetchMock.reset);

it('renders username input', () => {
  const { wrapper } = getTestData();

  expect(getInput(wrapper, 'username')).toHaveLength(1);
});

it('renders password input', () => {
  const { wrapper } = getTestData();

  expect(getInput(wrapper, 'password')).toHaveLength(1);
});

it('updates username input', () => {
  const { wrapper } = getTestData();
  changeInput(wrapper, 'username', 'franko');

  expect(getInput(wrapper, 'username').prop('value')).toBe('franko');
});

it('updates password input', () => {
  const { wrapper } = getTestData();
  changeInput(wrapper, 'password', '#fffferrari');

  expect(getInput(wrapper, 'password').prop('value')).toBe('#fffferrari');
});

it('posts user data', () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();

  changeInput(wrapper, 'username', 'forrestgump');
  changeInput(wrapper, 'password', 'pink+white');
  submitForm(wrapper);

  expect(getLastCallBody('/login', 'post')).toEqual({
    username: 'forrestgump',
    password: 'pink+white'
  });
});

it('renders loading state', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  submitForm(wrapper);

  expect(wrapper.text()).toMatch('Loading...');
});

it('renders error state', async () => {
  fetchMock.post('/login', delay(401));

  const { wrapper } = getTestData();
  submitForm(wrapper);

  await retry(() => {
    expect(wrapper.text()).toMatch('Oh no.');
  });
});

it('renders success state', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  submitForm(wrapper);

  await retry(() => {
    expect(wrapper.text()).toMatch('Success!');
  });
});
