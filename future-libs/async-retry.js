import until from 'async-until';

export async function retry(fn) {
  try {
    await until(
      () => {
        try {
          fn();
          return true;
        } catch (err) {
          return false;
        }
      },
      { timeout: 1000 }
    );
  } catch (err) {
    // At this point we know the condition failed, but we want to let the
    // original exception bubble up
    fn();
  }
}
