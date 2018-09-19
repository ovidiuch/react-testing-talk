import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../LoginForm';
import { Form } from '../../Form';

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

it('renders Form', () => {
  const { wrapper } = getTestData();
  expect(wrapper.find(Form)).toHaveLength(1);
});

it('passes username input', () => {
  const { wrapper } = getTestData();

  const { inputs } = wrapper.find(Form).props();
  expect(inputs).toContainEqual({
    type: 'text',
    name: 'username',
    value: 'franko',
    label: 'Username'
  });
});

it('passes password input', () => {
  const { wrapper } = getTestData();

  const { inputs } = wrapper.find(Form).props();
  expect(inputs).toContainEqual({
    type: 'password',
    name: 'password',
    value: '#fffferrari',
    label: 'Password'
  });
});

it('passes status', () => {
  const { wrapper } = getTestData({ status: 'loading' });

  expect(wrapper.find(Form).prop('status')).toBe('loading');
});

it('responds to input change', () => {
  const { onChange, wrapper } = getTestData();

  const props = wrapper.find(Form).props();
  props.onChange('username', 'forrestgump');

  expect(onChange).toBeCalledWith('username', 'forrestgump');
});

it('responds to form submit', () => {
  const { onSubmit, wrapper } = getTestData();

  const props = wrapper.find(Form).props();
  props.onSubmit();

  expect(onSubmit).toBeCalled();
});
