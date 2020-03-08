import React from 'react';
import { string } from 'prop-types';
import Icon from 'components/Icon';
import * as currencies from 'constants/currencies';
import styles from './exchangeRate.css';

const ExchangeRate = ({ from, rate, to }) => {
  const formattedRate = (+rate).toFixed(4).toString();
  const twoPartsRate = formattedRate.split(/(\d+[.]\d{2})(\d{2})/g);
  console.log(formattedRate);
  return (
    <section className={styles.container}>
      <Icon name="IncliningArrow" className={styles.icon} />
      {`${currencies[from].symbol}1 = ${twoPartsRate[1]}`}
      <span className={styles.rateSmaller}>{twoPartsRate[2]}</span>
    </section>
  );
};

ExchangeRate.propTypes = {
  from: string.isRequired,
  rate: string,
  to: string.isRequired,
};

ExchangeRate.defaultProps = {
  rate: '',
};

export default ExchangeRate;
