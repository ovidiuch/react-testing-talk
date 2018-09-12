import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from '../LoginForm';
import { mapStateToProps, mapDispatchToProps } from '../ConnectedLoginForm';
import { formReducer } from '../ConnectedLoginForm/reducer';

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
  it('maps username & password to props', () => {
    const username = 'franko';
    const password = '#fffferrari';
    expect(mapStateToProps({ username, password })).toEqual({
      username,
      password
    });
  });

  it('maps CHANGE action to props', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    props.onChange('password', 'pink+white');
    expect(dispatch).toBeCalledWith({
      type: 'CHANGE',
      key: 'password',
      value: 'pink+white'
    });
  });

  // TODO: maps SUBMIT action to props
});

describe('component', () => {
  const getTestData = () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const instance = mount(
      <LoginForm
        username="franko"
        password="#fffferrari"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );

    return { onChange, onSubmit, instance };
  };

  const getUserInput = instance => instance.find('input#username');
  const getPassInput = instance => instance.find('input#password');

  const changeInput = (input, value) =>
    input.prop('onChange')({ currentTarget: { value } });

  it('renders input field', () => {
    const { instance } = getTestData();
    const input = getUserInput(instance);

    expect(input).toHaveLength(1);
    expect(input.prop('value')).toBe('franko');
  });

  it('renders password field', () => {
    const { instance } = getTestData();
    const input = getPassInput(instance);

    expect(input).toHaveLength(1);
    expect(input.prop('value')).toBe('#fffferrari');
  });

  it('responds to username change', () => {
    const { onChange, instance } = getTestData();
    const input = getUserInput(instance);

    changeInput(input, 'forrestgump');
    expect(onChange).toBeCalledWith('username', 'forrestgump');
  });

  it('responds to password change', () => {
    const { onChange, instance } = getTestData();
    const input = getPassInput(instance);

    changeInput(input, 'pink+white');
    expect(onChange).toBeCalledWith('password', 'pink+white');
  });

  it('responds to submit action', () => {
    const { onSubmit, instance } = getTestData();

    instance.find('form').prop('onSubmit')({ preventDefault: jest.fn() });
    expect(onSubmit).toBeCalled();
  });
});
