export const initialState = {
  status: 'pending',
  username: '',
  password: ''
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.key]: action.value
      };
    case 'STATUS':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}
