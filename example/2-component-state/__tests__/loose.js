import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
// TODO: Import { StateMock } from '@react-mock/state';
import { ComponentState } from 'react-cosmos-fixture';
import { retry } from '../../../future-libs/async-retry';
import { delay } from '../../../future-libs/delay';
import { StatefulLoginForm } from '../StatefulLoginForm';

const getTestData = () => {
  const wrapper = mount(
    <ComponentState
      state={{
        status: 'pending',
        username: 'franko',
        password: '#fffferrari'
      }}
    >
      <StatefulLoginForm />
    </ComponentState>
  );

  return { wrapper };
};

const getUserInput = wrapper => wrapper.find('input#username');
const getPassInput = wrapper => wrapper.find('input#password');

const changeInput = (input, value) =>
  input.prop('onChange')({ currentTarget: { value } });
const submitForm = form => form.prop('onSubmit')({ preventDefault: jest.fn() });

afterEach(fetchMock.reset);

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

it('posts user data', () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  const userInput = getUserInput(wrapper);
  const passInput = getPassInput(wrapper);

  changeInput(userInput, 'forrestgump');
  changeInput(passInput, 'pink+white');
  submitForm(wrapper.find('form'));

  const [, { body }] = fetchMock.lastCall('/login', 'post');
  expect(body).toEqual(
    JSON.stringify({
      username: 'forrestgump',
      password: 'pink+white'
    })
  );
});

it('renders loading state', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  submitForm(wrapper.find('form'));

  expect(wrapper.text()).toMatch('Loading...');
});

it('renders error state', async () => {
  fetchMock.post('/login', delay(401));

  const { wrapper } = getTestData();
  submitForm(wrapper.find('form'));

  await retry(() => {
    expect(wrapper.text()).toMatch('Oh no.');
  });
});

it('renders success state', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const { wrapper } = getTestData();
  submitForm(wrapper.find('form'));

  await retry(() => {
    expect(wrapper.text()).toMatch('Success!');
  });
});
