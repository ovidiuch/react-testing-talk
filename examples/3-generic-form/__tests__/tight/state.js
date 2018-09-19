// NOTE: Auto copied from 2-component-state/__tests__/tight/state.js.
// Don't edit by hand! Edit source and run `yarn copy-example-files` instead.
import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import { retry } from '../../../../future-libs/async-retry';
import { delay } from '../../../../future-libs/delay';
import { StatefulLoginForm } from '../../StatefulLoginForm';
import { LoginForm } from '../../LoginForm';

const getTestData = () => {
  const wrapper = shallow(<StatefulLoginForm />);

  return { wrapper };
};

const getLoginForm = wrapper => wrapper.find(LoginForm);

const changeForm = (wrapper, key, value) =>
  getLoginForm(wrapper).prop('onChange')(key, value);

const submitForm = wrapper => getLoginForm(wrapper).prop('onSubmit')();

const getLastCallBody = (url, method) =>
  JSON.parse(fetchMock.lastCall(url, method)[1].body);

afterEach(fetchMock.reset);

it('renders LoginForm', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper)).toHaveLength(1);
});

it('passes "pending" status', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper).prop('status')).toBe('pending');
});

it('passes blank username', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper).prop('username')).toBe('');
});

it('passes blank password', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper).prop('password')).toBe('');
});

it('updates username', () => {
  const { wrapper } = getTestData();

  changeForm(wrapper, 'username', 'forrestgump');
  expect(getLoginForm(wrapper).prop('username')).toBe('forrestgump');
});

it('updates password', () => {
  const { wrapper } = getTestData();

  changeForm(wrapper, 'password', 'pink+white');
  expect(getLoginForm(wrapper).prop('password')).toBe('pink+white');
});

it('posts user data', () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();

  changeForm(wrapper, 'username', 'forrestgump');
  changeForm(wrapper, 'password', 'pink+white');
  submitForm(wrapper);

  expect(getLastCallBody('/login', 'post')).toEqual({
    username: 'forrestgump',
    password: 'pink+white'
  });
});

it('passes "loading" status on submit', () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  submitForm(wrapper);

  expect(getLoginForm(wrapper).prop('status')).toBe('loading');
});

it('passes "error" status on submit', async () => {
  fetchMock.post('/login', delay(401));

  const { wrapper } = getTestData();
  submitForm(wrapper);

  await retry(() => {
    expect(getLoginForm(wrapper).prop('status')).toBe('error');
  });
});

it('passes "success" status on submit', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  getLoginForm(wrapper).prop('onSubmit')();

  await retry(() => {
    expect(getLoginForm(wrapper).prop('status')).toBe('success');
  });
});
