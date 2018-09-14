import { connect } from 'react-redux';
import { LoginForm } from './LoginForm';
import { changeForm, submitForm } from './actions';

export function mapStateToProps({ status, username, password }) {
  return { status, username, password };
}

export const mapDispatchToProps = {
  onChange: changeForm,
  onSubmit: submitForm
};

export const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
