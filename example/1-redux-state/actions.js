export function changeInput(key, value) {
  return { type: 'CHANGE', key, value };
}

export async function submitForm(dispatch, getState) {
  dispatch(changeStatus('loading'));

  const { username, password } = getState();
  try {
    const body = JSON.stringify({ username, password });
    const res = await fetch('/login', { method: 'POST', body });

    if (res.status !== 200) {
      throw new Error('Unauthorized');
    }

    dispatch(changeStatus('success'));
  } catch (err) {
    dispatch(changeStatus('error'));
  }
}

function changeStatus(status) {
  return {
    type: 'STATUS',
    status
  };
}
