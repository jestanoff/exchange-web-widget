import React from 'react';
import { string } from 'prop-types';
import Icon from 'components/Icon';
import * as currencies from 'constants/currencies';
import styles from './exchangeRate.css';

const ExchangeRate = ({ from, rate, to }) => (
  <section className={styles.container}>
    <Icon name="IncliningArrow" className={styles.icon} />
    {`${currencies[from].symbol}1 = ${currencies[to].symbol}${rate}`}
  </section>
);

ExchangeRate.propTypes = {
  from: string.isRequired,
  rate: string,
  to: string.isRequired,
};

ExchangeRate.defaultProps = {
  rate: '',
};

export default ExchangeRate;
