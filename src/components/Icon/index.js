import React from 'react';
import * as icons from './icons';

const Icon = ({ className, name }) => {
  const SvgIcon = icons[name];

  return <SvgIcon className={className} focusable="false" />;
};

export default Icon;
