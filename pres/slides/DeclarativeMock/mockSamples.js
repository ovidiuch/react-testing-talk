export const PROPS_SAMPLE = `<Event title="JSHeroes 2019" />`;

export const STATE_SAMPLE = `<StateMock state={{ isOpen: true }}>
  <MyComponent />
</StateMock>`;

export const REDUX_SAMPLE = `<Provider store={createStore(mockedState)}>
  <MyComponent />
</Provider>`;

export const STYLED_SAMPLE = `<ThemeProvider theme="light">
  <MyComponent />
</ThemeProvider>`;

export const FETCH_SAMPLE = `<FetchMock url="/login" method="POST" response={403}>
  <MyComponent />
</FetchMock>`;

export const LOCALSTORAGE_SAMPLE = `<LocalStorageMock items={{ sessionId: 'foo' }}>
  <MyComponent />
</LocalStorageMock>`;

export const WINDOW_SAMPLE = `<WindowMock width={640} height={480}>
  <MyComponent />
</WindowMock>`;
