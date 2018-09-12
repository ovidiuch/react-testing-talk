import { connect } from 'react-redux';
import { LoginForm } from './LoginForm';

const initialState = {
  username: '',
  password: ''
};

export function formReducer(state = initialState, action) {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.key]: action.value
    };
  }

  return state;
}

export function mapStateToProps({ username, password }) {
  return { username, password };
}

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (key, value) => dispatch({ type: 'CHANGE', key, value }),
    // TODO: Fetch request
    onSubmit: () => console.log('Submit')
  };
}

export const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
