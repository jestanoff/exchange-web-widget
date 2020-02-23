import React from 'react';
import { oneOf, string } from 'prop-types';
import getCurrencyCodes from '../../utils/getCurrencyCodes';
import * as currencies from '../../constants/currencies';
import styles from './balance.css';

const Balance = ({ amount, currency }) => (
  <span className={styles.balance}>Balance: {`${currencies[currency].symbol}${amount}`}</span>
);

Balance.propTypes = {
  amount: string,
  currency: oneOf(getCurrencyCodes(currencies)),
};

Balance.defaultProps = {
  amount: '0',
};

export default Balance;
