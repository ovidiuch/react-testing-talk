import fetchMock from 'fetch-mock';
import { retry } from '../../../future-libs/async-retry';
import { delay } from '../../../future-libs/delay';
import { mapStateToProps, mapDispatchToProps } from '../ConnectedLoginForm';

afterEach(fetchMock.reset);

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

it('triggers CHANGE action', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch);

  props.onChange('password', 'pink+white');
  expect(dispatch).toBeCalledWith({
    type: 'CHANGE',
    key: 'password',
    value: 'pink+white'
  });
});

it('troggers STATUS=loading action (async)', () => {
  const dispatch = jest.fn();
  const { onSubmit } = mapDispatchToProps(dispatch);

  onSubmit();
  callAsyncAction(dispatch, () => state);

  expect(dispatch).toBeCalledWith({
    type: 'STATUS',
    status: 'loading'
  });
});

it('triggers STATUS=error action', async () => {
  fetchMock.post('/login', delay(401));

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
});

it('triggers STATUS=success action', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const dispatch = jest.fn();
  const { onSubmit } = mapDispatchToProps(dispatch);

  onSubmit();
  callAsyncAction(dispatch, () => state);

  await retry(() => {
    expect(dispatch).toBeCalledWith({
      type: 'STATUS',
      status: 'success'
    });
  });
});
