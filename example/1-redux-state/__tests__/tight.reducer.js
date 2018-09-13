import { formReducer } from '../reducer';

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
