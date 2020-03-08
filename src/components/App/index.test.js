import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'reducers';
import App from './';

function renderWithRedux(ui, { store = createStore(reducer) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

describe('App component', () => {
  test('can render with redux with defaults', () => {
    const { getByTestId, container } = renderWithRedux(<App />);
    console.log(container);
    expect(getByTestId('count-value')).toHaveTextContent('1');
  });

  // test('should render proper markup', () => {
  //   const { container } = render(<App />);

  //   expect(container).toMatchSnapshot();
  // });
});
