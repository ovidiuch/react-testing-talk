import { changeForm, submitForm } from '../actions';
import { mapStateToProps, mapDispatchToProps } from '../ConnectedLoginForm';

const state = {
  status: 'pending',
  username: 'franko',
  password: '#fffferrari'
};

it('maps state.status', () => {
  expect(mapStateToProps(state).status).toEqual('pending');
});

it('maps state.username', () => {
  expect(mapStateToProps(state).username).toEqual('franko');
});

it('maps state.password', () => {
  expect(mapStateToProps(state).password).toEqual('#fffferrari');
});

it('maps change action', () => {
  expect(mapDispatchToProps.onChange).toBe(changeForm);
});

it('maps change action', () => {
  expect(mapDispatchToProps.onSubmit).toBe(submitForm);
});
