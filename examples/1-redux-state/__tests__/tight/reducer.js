import { formReducer } from '../../reducer';

it('sets username on CHANGE action', () => {
  const state = formReducer(undefined, {
    type: 'CHANGE',
    key: 'username',
    value: 'forrestgump'
  });
  expect(state.username).toEqual('forrestgump');
});

it('sets password on CHANGE action', () => {
  const state = formReducer(undefined, {
    type: 'CHANGE',
    key: 'password',
    value: 'pink+white'
  });
  expect(state.password).toEqual('pink+white');
});

it('sets status on STATUS action', () => {
  const state = formReducer(undefined, {
    type: 'STATUS',
    status: 'loading'
  });
  expect(state.status).toEqual('loading');
});
