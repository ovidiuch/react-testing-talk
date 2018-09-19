// NOTE: Auto copied from 1-redux-state/__tests__/tight/loginForm.js.
// Don't edit by hand! Edit source and run `yarn copy-example-files` instead.
import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../LoginForm';

const getTestData = ({ status = 'pending' } = {}) => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const wrapper = shallow(
    <LoginForm
      status={status}
      username="franko"
      password="#fffferrari"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );

  return { onChange, onSubmit, wrapper };
};

const getUserInput = wrapper => wrapper.find('#username');
const getPassInput = wrapper => wrapper.find('#password');

const changeInput = (input, value) =>
  input.prop('onChange')({ currentTarget: { value } });

it('renders username input', () => {
  const { wrapper } = getTestData();
  const input = getUserInput(wrapper);

  expect(input).toHaveLength(1);
  expect(input.prop('value')).toBe('franko');
});

it('renders password input', () => {
  const { wrapper } = getTestData();
  const input = getPassInput(wrapper);

  expect(input).toHaveLength(1);
  expect(input.prop('value')).toBe('#fffferrari');
});

it('responds to username change', () => {
  const { onChange, wrapper } = getTestData();
  const input = getUserInput(wrapper);

  changeInput(input, 'forrestgump');
  expect(onChange).toBeCalledWith('username', 'forrestgump');
});

it('responds to password change', () => {
  const { onChange, wrapper } = getTestData();
  const input = getPassInput(wrapper);

  changeInput(input, 'pink+white');
  expect(onChange).toBeCalledWith('password', 'pink+white');
});

it('responds to form submit', () => {
  const { onSubmit, wrapper } = getTestData();

  wrapper.find('form').prop('onSubmit')({ preventDefault: jest.fn() });
  expect(onSubmit).toBeCalled();
});

it('renders loading state', () => {
  const { wrapper } = getTestData({ status: 'loading' });
  expect(wrapper.find('[children="Loading..."]')).toHaveLength(1);
});

it('renders success state', () => {
  const { wrapper } = getTestData({ status: 'success' });
  expect(wrapper.find('[children="Success!"]')).toHaveLength(1);
});

it('renders error state', () => {
  const { wrapper } = getTestData({ status: 'error' });
  expect(wrapper.find('[children="Oh no."]')).toHaveLength(1);
});
