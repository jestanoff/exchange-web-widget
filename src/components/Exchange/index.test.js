import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Exchange from './';


describe('Exchange component', () => {
  test('should render proper markup', () => {
    const { container } = render(<Exchange />);
  
    expect(container).toMatchSnapshot();
  })
});
