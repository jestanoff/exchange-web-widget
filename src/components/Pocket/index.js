import React from 'react';
import { oneOf } from 'prop-types';
import { CHF, EUR, GBP, USD } from '../../constants/currencies';
import Input from '../Forms/Input';
import styles from './pocket.css';

const FromPocket = ({ currency, type }) => (
  <section className={styles.container}>
    <span className={styles.currency}>{currency}</span>
    <Input name={type} />
  </section>
);

FromPocket.propTypes = {
  currency: oneOf([CHF.code, EUR.code, GBP.code, USD.code]).isRequired,
  type: oneOf(['from', 'to']).isRequired,
};

export default FromPocket;
