// TODO: Move to individual files
export const PROPS_SAMPLE = `<Event title="React.js Bucharest" />`;

export const STATE_SAMPLE = `<StateMock state={{ count: 5 }}>
  <Counter />
</StateMock>`;

export const REDUX_SAMPLE = `<Provider store={createStore(mockedState)}>
  <LoginForm />
</Provider>`;

export const STYLED_SAMPLE = `<ThemeProvider theme="light">
  <MyComponent />
</ThemeProvider>`;

export const INTL_SAMPLE = `<IntlProvider theme={theme}>
  <MyComponent />
</IntlProvider>`;

export const XHR_SAMPLE = `<XhrMock url="/login" method="POST" response={403}>
  <MyComponent />
</XhrMock>`;

export const FETCH_SAMPLE = `<FetchMock url="/login" method="POST" response={403}>
  <MyComponent />
</FetchMock>`;

export const LOCALSTORAGE_SAMPLE = `<LocalStorageMock items={{ sessionId: 'foo' }}>
  <MyComponent />
</LocalStorageMock>`;

export const WINDOW_SAMPLE = `<WindowMock width={640} height={480}>
  <MyComponent />
</WindowMock>`;
