import { connect } from 'react-redux';
import { LoginForm } from './LoginForm';
import { changeInput, submitForm } from './actions';

export function mapStateToProps({ status, username, password }) {
  return { status, username, password };
}

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (key, value) => dispatch(changeInput(key, value)),
    onSubmit: () => dispatch(submitForm)
  };
}

export const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
