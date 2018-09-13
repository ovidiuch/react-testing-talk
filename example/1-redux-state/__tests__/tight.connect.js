import fetchMock from 'fetch-mock';
import { retry } from '../../../future-libs/async-retry';
import { mapStateToProps, mapDispatchToProps } from '../ConnectedLoginForm';

afterEach(fetchMock.reset);

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

// TODO: Mock actions
