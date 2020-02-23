import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Balance from './';

describe('Balance component', () => {
  test('should render proper markup', () => {
    const { container } = render(<Balance amount="99.10" currency="EUR" />);

    expect(container).toMatchSnapshot();
  });

  test('should show default amount of 0 if no amount has been passed', () => {
    const { getByText } = render(<Balance currency="USD" />);

    expect(getByText('Balance: $0')).toBeInTheDocument();
  });
});
