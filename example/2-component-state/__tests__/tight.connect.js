import React from 'react';
import { shallow } from 'enzyme';
import { StatefulLoginForm } from '../StatefulLoginForm';
import { LoginForm } from '../../1-redux-state/LoginForm';

const getTestData = () => {
  const wrapper = shallow(<StatefulLoginForm />);
  wrapper.setState({
    status: 'pending',
    username: 'franko',
    password: '#fffferrari'
  });

  return { wrapper };
};

const getLoginForm = wrapper => wrapper.find(LoginForm);

it('renders child', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper)).toHaveLength(1);
});

it('maps state.status', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper).prop('status')).toEqual('pending');
});

it('maps state.username', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper).prop('username')).toEqual('franko');
});

it('maps state.password', () => {
  const { wrapper } = getTestData();
  expect(getLoginForm(wrapper).prop('password')).toEqual('#fffferrari');
});

it('sets state.username on change', () => {
  const { wrapper } = getTestData();

  wrapper.prop('onChange')('username', 'forrestgump');
  expect(wrapper.state('username')).toBe('forrestgump');
});

it('sets state.username on change', () => {
  const { wrapper } = getTestData();

  wrapper.prop('onChange')('password', 'pink+white');
  expect(wrapper.state('password')).toBe('pink+white');
});

// TODO
// it('sets "loading" status to submit')
// it('sets "error" status to submit')
// it('sets "success" status to submit')
