import React from 'react';
import pure from 'recompose/pure';

export default (svg, displayName) => {
  const Icon = pure(props => React.cloneElement(svg, props));
  Icon.displayName = displayName;

  return Icon;
};
