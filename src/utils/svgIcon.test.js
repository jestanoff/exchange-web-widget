import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import svgIcon from './svgIcon';

describe('svgIcon', () => {
  test('should return Icon react component', () => {
    const svg = (
      <svg>
        <patch d="M1" />
      </svg>
    );
    const Icon = svgIcon(svg, 'icon');
    const { container } = render(<Icon foo="bar" />);

    expect(container).toMatchSnapshot();
  });
});
