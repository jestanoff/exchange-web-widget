import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Input from './';


describe('Input component', () => {
  test('should render proper markup', () => {
    const { container } = render(<Input name="field" />);
  
    expect(container).toMatchSnapshot();
  })
});
