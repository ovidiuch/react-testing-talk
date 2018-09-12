export function change(key, value) {
  return { type: 'CHANGE', key, value };
}

export async function submit(dispatch, getState) {
  dispatch(status('loading'));

  const { username, password } = getState();
  try {
    await new Promise(res => setTimeout(res, 500)); // Artificial delay
    await fetch('/login', { username, password });
    dispatch(status('success'));
  } catch (err) {
    dispatch(status('error'));
  }
}

function status(status) {
  return {
    type: 'STATUS',
    status
  };
}
