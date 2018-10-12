import React from 'react';
import { mount } from 'enzyme';
import { FetchMock, fetchMock } from '@react-mock/fetch';
import retry from '@skidding/async-retry';
import { delay } from '../../../../future-libs/delay';
import { StatefulLoginForm } from '../../StatefulLoginForm';

const getTestData = res => {
  const wrapper = mount(
    <FetchMock
      options={{
        matcher: '/login',
        response: delay(res),
        method: 'POST'
      }}
    >
      <StatefulLoginForm />
    </FetchMock>
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
  const { wrapper } = getTestData({ ok: true });

  changeInput(wrapper, 'username', 'forrestgump');
  changeInput(wrapper, 'password', 'pink+white');
  submitForm(wrapper);

  expect(getLastCallBody('/login', 'post')).toEqual({
    username: 'forrestgump',
    password: 'pink+white'
  });
});

it('renders loading state', async () => {
  const { wrapper } = getTestData({ ok: true });
  submitForm(wrapper);

  expect(wrapper.text()).toMatch('Just a sec...');
});

it('renders error state', async () => {
  const { wrapper } = getTestData(401);
  submitForm(wrapper);

  await retry(() => {
    expect(wrapper.text()).toMatch('Come again?');
  });
});

it('renders success state', async () => {
  const { wrapper } = getTestData({ ok: true });
  submitForm(wrapper);

  await retry(() => {
    expect(wrapper.text()).toMatch(`You're in!`);
  });
});
