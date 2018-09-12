export const initialState = {
  status: 'pending',
  username: '',
  password: ''
};

// TODO: Reduce STATUS action
export function formReducer(state = initialState, action) {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.key]: action.value
    };
  }

  return state;
}
