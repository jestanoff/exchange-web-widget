import React from 'react';
import { oneOf, string } from 'prop-types';
import styles from './input.css';
import classNames from 'classnames';

const Input = ({ name }) => (
  <input
    className={classNames(styles.input, { [styles.from]: name === 'from' })}
    data-test={`input-${name}`}
    maxLength="17"
    name={name}
    placeholder="0"
    required
    type="tel"
  />
);

Input.propTypes = {
  name: oneOf(['from', 'to']).isRequired,
};

export default Input;
