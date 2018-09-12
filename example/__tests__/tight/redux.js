import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from '../../LoginForm';
import {
  formReducer,
  mapStateToProps,
  mapDispatchToProps
} from '../../ConnectedLoginForm';

describe('reducer', () => {
  it('adds username state on CHANGE action', () => {
    const state = formReducer(undefined, {
      type: 'CHANGE',
      key: 'username',
      value: 'forrestgump'
    });
    expect(state.username).toEqual('forrestgump');
  });

  it('adds password state on CHANGE action', () => {
    const state = formReducer(undefined, {
      type: 'CHANGE',
      key: 'password',
      value: 'pink+white'
    });
    expect(state.password).toEqual('pink+white');
  });
});

describe('connect', () => {
  it('maps state to props', () => {
    const username = 'Franko';
    const password = '#fffferrari';
    expect(mapStateToProps({ username, password })).toEqual({
      username,
      password
    });
  });

  it('maps dispatch to props', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    props.onChange('password', 'pink+white');
    expect(dispatch).toBeCalledWith({
      type: 'CHANGE',
      key: 'password',
      value: 'pink+white'
    });
  });
});

describe('component', () => {
  const getTestData = () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const instance = mount(
      <LoginForm
        username="Franko"
        password="#fffferrari"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );

    return { onChange, onSubmit, instance };
  };

  const getUserInput = instance => instance.find('input#username');
  const getPassInput = instance => instance.find('input#password');

  it('renders input field', () => {
    const { instance } = getTestData();
    const input = getUserInput(instance);

    expect(input).toHaveLength(1);
    expect(input.props().value).toBe('Franko');
  });

  it('renders password field', () => {
    const { instance } = getTestData();
    const input = getPassInput(instance);

    expect(input).toHaveLength(1);
    expect(input.props().value).toBe('#fffferrari');
  });

  it('responds to username change', () => {
    const { onChange, instance } = getTestData();
    const props = getUserInput(instance).props();

    props.onChange({ currentTarget: { value: 'forrestgump' } });
    expect(onChange).toBeCalledWith('username', 'forrestgump');
  });

  it('responds to password change', () => {
    const { onChange, instance } = getTestData();
    const props = getPassInput(instance).props();

    props.onChange({ currentTarget: { value: '#fffferrari' } });
    expect(onChange).toBeCalledWith('password', '#fffferrari');
  });

  it('responds to submit action', () => {
    const { onSubmit, instance } = getTestData();
    const props = instance.find('form').props();

    props.onSubmit({ preventDefault: jest.fn() });
    expect(onSubmit).toBeCalled();
  });
});
