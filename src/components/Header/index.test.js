import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './';


describe('Header component', () => {
  test('should render proper markup', () => {
    const { container } = render(<Header />);
  
    expect(container).toMatchSnapshot();
  })
});
