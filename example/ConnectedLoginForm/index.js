import { connect } from 'react-redux';
import { LoginForm } from '../LoginForm';
import { change, submit } from './actions';

// TODO: Map `status` state
export function mapStateToProps({ username, password }) {
  return { username, password };
}

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (key, value) => dispatch(change(key, value)),
    onSubmit: () => dispatch(submit)
  };
}

export const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
