import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SwapPocketsButton from './';

describe('SwapPocketsButton component', () => {
  test('should render proper markup', () => {
    const { container } = render(<SwapPocketsButton />);

    expect(container).toMatchSnapshot();
  });
});
