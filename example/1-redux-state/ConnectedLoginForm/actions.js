export function change(key, value) {
  return { type: 'CHANGE', key, value };
}

export async function submit(dispatch, getState) {
  dispatch(status('loading'));

  const { username, password } = getState();
  try {
    const body = JSON.stringify({ username, password });
    const res = await fetch('/login', { method: 'POST', body });

    if (res.status !== 200) {
      throw new Error('Unauthorized');
    }

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
