import fetchMock from 'fetch-mock';
import { retry } from '../../../future-libs/async-retry';
import { delay } from '../../../future-libs/delay';
import { changeInput, submitForm } from '../actions';

afterEach(fetchMock.reset);

const mockLoginCall = res => fetchMock.post('/login', delay(res));

const getLastLoginCallBody = () => {
  const [, { body }] = fetchMock.lastCall('/login', 'post');

  return JSON.parse(body);
};

it('creates CHANGE action', () => {
  expect(changeInput('password', 'pink+white')).toEqual({
    type: 'CHANGE',
    key: 'password',
    value: 'pink+white'
  });
});

it('posts user data', () => {
  mockLoginCall({ ok: true });

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  submitForm(dispatch, getState);
  expect(getLastLoginCallBody()).toEqual({
    username: 'forrestgump',
    password: 'pink+white'
  });
});

it('dispatches "loading" STATUS action', () => {
  mockLoginCall({ ok: true });

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  submitForm(dispatch, getState);
  expect(dispatch).toBeCalledWith({
    type: 'STATUS',
    status: 'loading'
  });
});

it('dispatches "error" STATUS action', async () => {
  mockLoginCall(401);

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  submitForm(dispatch, getState);
  await retry(() => {
    expect(dispatch).toBeCalledWith({
      type: 'STATUS',
      status: 'error'
    });
  });
});

it('dispatches "success" STATUS action', async () => {
  mockLoginCall({ ok: true });

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  submitForm(dispatch, getState);
  await retry(() => {
    expect(dispatch).toBeCalledWith({
      type: 'STATUS',
      status: 'success'
    });
  });
});
