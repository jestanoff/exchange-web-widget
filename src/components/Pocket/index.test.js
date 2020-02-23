
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pocket from './';


describe('Pocket component', () => {
  test('should render proper markup', () => {
    const { container } = render(<Pocket currency="EUR" type="to" />);
  
    expect(container).toMatchSnapshot();
  })
});
