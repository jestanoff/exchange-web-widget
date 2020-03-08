import React from 'react';
import { oneOf, string } from 'prop-types';
import classNames from 'classnames';
import Input from 'components/Forms/Input';
import Balance from 'components/Balance';
import getCurrencyCodes from 'utils/getCurrencyCodes';
import * as currencies from 'constants/currencies';
import styles from './pocket.css';

const Pocket = ({ amount, currency, type }) => (
  <section className={classNames(styles.container, styles[type])}>
    <div>
      <h2 className={styles.currency}>{currency}</h2>
      <Balance amount={amount} currency={currency} />
    </div>
    <Input name={type} />
  </section>
);

Pocket.propTypes = {
  amount: string,
  currency: oneOf(getCurrencyCodes(currencies)).isRequired,
  type: oneOf(['from', 'to']).isRequired,
};

Pocket.default = {
  amount: undefined,
};

export default Pocket;
