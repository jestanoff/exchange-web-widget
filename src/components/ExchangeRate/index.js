import React from 'react';
import { string } from 'prop-types';
import * as currencies from '../../constants/currencies';
import styles from './exchangeRate.css';

const ExchangeRate = ({ from, rate, to }) => (
  <section className={styles.container}>
    {`${currencies[from].symbol}1 = ${currencies[to].symbol}${rate}`}
  </section>
);

ExchangeRate.propTypes = {
  from: string.isRequired,
  rate: string.isRequired,
  to: string.isRequired,
};

export default ExchangeRate;
