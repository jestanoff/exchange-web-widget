import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './';

describe('Button component', () => {
  test('should render proper markup', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});
