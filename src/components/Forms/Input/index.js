import React from 'react';
import { string } from 'prop-types';

const Input = ({ name }) => (
  <input type="text" name={name}/>
);

Input.propTypes = {
  name: string.isRequired,
}

export default Input;
