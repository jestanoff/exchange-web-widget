import React from 'react';
import Icon from '../Icon';
import styles from './swapPocketsButton.css';

const SwapPocketsButton = () => (
  <a className={styles.button} href="#">
    <Icon name="Swap" className={styles.icon} />
  </a>
);

export default SwapPocketsButton;
