import React from 'react';
import { string } from 'prop-types';
import styles from './input.css';

const Input = ({ name }) => <input className={styles.input} name={name} type="text"/>;

Input.propTypes = {
  name: string.isRequired,
};

export default Input;
