import React from 'react';
import { shallow } from 'enzyme';
import { retry } from '../../future-libs/async-retry';
import { LoginForm } from '../LoginForm';
import { mapStateToProps, mapDispatchToProps } from '../ConnectedLoginForm';
import { formReducer } from '../ConnectedLoginForm/reducer';

describe('reducer', () => {
  it('sets username state on CHANGE action', () => {
    const state = formReducer(undefined, {
      type: 'CHANGE',
      key: 'username',
      value: 'forrestgump'
    });
    expect(state.username).toEqual('forrestgump');
  });

  it('sets password state on CHANGE action', () => {
    const state = formReducer(undefined, {
      type: 'CHANGE',
      key: 'password',
      value: 'pink+white'
    });
    expect(state.password).toEqual('pink+white');
  });

  it('sets status state on STATUS action', () => {
    const state = formReducer(undefined, {
      type: 'STATUS',
      status: 'loading'
    });
    expect(state.status).toEqual('loading');
  });
});

describe('connect', () => {
  const callAsyncAction = (dispatch, getState) => {
    const [[thunkAction]] = dispatch.mock.calls;
    thunkAction(dispatch, getState);
  };

  const state = {
    status: 'pending',
    username: 'franko',
    password: '#fffferrari'
  };

  it('maps "status" state', () => {
    expect(mapStateToProps(state).status).toEqual('pending');
  });

  it('maps "username" state', () => {
    expect(mapStateToProps(state).username).toEqual('franko');
  });

  it('maps "password" state', () => {
    expect(mapStateToProps(state).password).toEqual('#fffferrari');
  });

  it('maps CHANGE action', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    props.onChange('password', 'pink+white');
    expect(dispatch).toBeCalledWith({
      type: 'CHANGE',
      key: 'password',
      value: 'pink+white'
    });
  });

  it('maps STATUS=loading action (async)', () => {
    const dispatch = jest.fn();
    const { onSubmit } = mapDispatchToProps(dispatch);

    onSubmit();
    callAsyncAction(dispatch, () => state);

    expect(dispatch).toBeCalledWith({
      type: 'STATUS',
      status: 'loading'
    });
  });

  it('maps STATUS=error action (async)', async () => {
    const dispatch = jest.fn();
    const { onSubmit } = mapDispatchToProps(dispatch);

    onSubmit();
    callAsyncAction(dispatch, () => state);

    await retry(() => {
      expect(dispatch).toBeCalledWith({
        type: 'STATUS',
        status: 'error'
      });
    });

    // TODO: Success path
    // it('maps STATUS=success action (async)', async () => {
    //   const dispatch = jest.fn();
    //   const { onSubmit } = mapDispatchToProps(dispatch);
    //
    //   onSubmit();
    //   callAsyncAction(dispatch, () => state);
    //
    //   await retry(() => {
    //     expect(dispatch).toBeCalledWith({
    //       type: 'STATUS',
    //       status: 'success'
    //     });
    //   });
    // });
  });
});

describe('component', () => {
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

  const getUserInput = wrapper => wrapper.find('input#username');
  const getPassInput = wrapper => wrapper.find('input#password');

  const changeInput = (input, value) =>
    input.prop('onChange')({ currentTarget: { value } });

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

  it('responds to submit action', () => {
    const { onSubmit, wrapper } = getTestData();

    wrapper.find('form').prop('onSubmit')({ preventDefault: jest.fn() });
    expect(onSubmit).toBeCalled();
  });

  it('renders loading state', () => {
    const { wrapper } = getTestData({ status: 'loading' });
    expect(wrapper.text()).toMatch('Loading...');
  });

  it('renders success state', () => {
    const { wrapper } = getTestData({ status: 'success' });
    expect(wrapper.text()).toMatch('Success!');
  });

  it('renders error state', () => {
    const { wrapper } = getTestData({ status: 'error' });
    expect(wrapper.text()).toMatch('Oh no.');
  });
});
