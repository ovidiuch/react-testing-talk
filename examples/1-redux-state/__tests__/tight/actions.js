import fetchMock from 'fetch-mock';
import { delay } from '../../../../future-libs/delay';
import { changeForm, submitForm } from '../../actions';

const getLastCallBody = (url, method) =>
  JSON.parse(fetchMock.lastCall(url, method)[1].body);

afterEach(fetchMock.reset);

it('creates CHANGE action', () => {
  expect(changeForm('password', 'pink+white')).toEqual({
    type: 'CHANGE',
    key: 'password',
    value: 'pink+white'
  });
});

it('posts user data', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  await submitForm()(dispatch, getState);
  expect(getLastCallBody('/login', 'post')).toEqual({
    username: 'forrestgump',
    password: 'pink+white'
  });
});

it('dispatches "loading" STATUS action', () => {
  fetchMock.post('/login', delay({ ok: true }));

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  submitForm()(dispatch, getState);
  expect(dispatch).toBeCalledWith({
    type: 'STATUS',
    status: 'loading'
  });
});

it('dispatches "error" STATUS action', async () => {
  fetchMock.post('/login', delay(401));

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  await submitForm()(dispatch, getState);
  expect(dispatch).toBeCalledWith({
    type: 'STATUS',
    status: 'error'
  });
});

it('dispatches "success" STATUS action', async () => {
  fetchMock.post('/login', delay({ ok: true }));

  const dispatch = jest.fn();
  const getState = () => ({
    username: 'forrestgump',
    password: 'pink+white'
  });

  await submitForm()(dispatch, getState);
  expect(dispatch).toBeCalledWith({
    type: 'STATUS',
    status: 'success'
  });
});
