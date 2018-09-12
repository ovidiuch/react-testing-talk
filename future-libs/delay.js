export function delay(val) {
  return new Promise(res => setTimeout(() => res(val), 500));
}
