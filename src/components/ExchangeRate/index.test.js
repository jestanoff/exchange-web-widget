import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ExchangeRate from './';


describe('ExchangeRate component', () => {
  test('should render proper markup', () => {
    const { container } = render(<ExchangeRate from="USD" rate="1.2" to="EUR" />);
  
    expect(container).toMatchSnapshot();
  });
});
