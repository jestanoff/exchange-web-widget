import React from 'react';
import { oneOf } from 'prop-types';
import classNames from 'classnames';
import Input from '../Forms/Input';
import Balance from '../Balance';
import getCurrencyCodes from '../../utils/getCurrencyCodes';
import * as currencies from '../../constants/currencies';
import styles from './pocket.css';

const FromPocket = ({ currency, type }) => (
  <section className={classNames(styles.container, styles[type])}>
    <div>
      <h2 className={styles.currency}>{currency}</h2>
      <Balance currency={currency} />
    </div>
    <Input name={type} />
  </section>
);

FromPocket.propTypes = {
  currency: oneOf(getCurrencyCodes(currencies)).isRequired,
  type: oneOf(['from', 'to']).isRequired,
};

export default FromPocket;
