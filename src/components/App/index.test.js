import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './';

jest.mock('react-redux', () => ({
  connect: () => () => <div />,
}));

describe('App component', () => {
  test('should render proper markup', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
