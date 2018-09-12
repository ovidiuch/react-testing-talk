import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { ConnectedLoginForm } from '../ConnectedLoginForm';
import { createStore } from '../ConnectedLoginForm/store';

const getTestData = () => {
  const store = createStore({
    status: 'pending',
    username: 'franko',
    password: '#fffferrari'
  });
  const instance = mount(
    <Provider store={store}>
      <ConnectedLoginForm />
    </Provider>
  );

  return { instance };
};

const getUserInput = instance => instance.find('input#username');
const getPassInput = instance => instance.find('input#password');

// const changeInput = (input, value) =>
//   input.prop('onChange')({ currentTarget: { value } });

it('renders input field', () => {
  const { instance } = getTestData();
  const input = getUserInput(instance);

  expect(input).toHaveLength(1);
  expect(input.prop('value')).toBe('franko');
});

it('renders password field', () => {
  const { instance } = getTestData();
  const input = getPassInput(instance);

  expect(input).toHaveLength(1);
  expect(input.prop('value')).toBe('#fffferrari');
});

// it('responds to username change', async () => {
//   const { instance } = getTestData();
//   changeInput(getUserInput(instance), 'forrestgump');
//
//   instance.update(); // Enzyme quirk
//   expect(getUserInput(instance).prop('value')).toBe('forrestgump');
// });
//
// it('responds to password change', () => {
//   const { instance } = getTestData();
//   changeInput(getPassInput(instance), 'pink+white');
//
//   instance.update(); // Enzyme quirk
//   expect(getPassInput(instance).prop('value')).toBe('pink+white');
// });

// it('responds to submit action', () => {
//   const { onSubmit, instance } = getTestData();
//   const props = instance.find('form').props();
//
//   props.onSubmit({ preventDefault: jest.fn() });
//   expect(onSubmit).toBeCalled();
// });
