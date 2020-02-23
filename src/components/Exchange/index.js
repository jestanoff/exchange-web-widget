import React from 'react';
import Button from '../Forms/Button';
import ExchangeRate from '../ExchangeRate';
import Pocket from '../Pocket';
import SwapPocketsButton from '../SwapPocketsButton';
import * as currencies from '../../constants/currencies';
import styles from './app.css';

const Exchange = () => {
  const fromPocket = {
    currency: currencies.EUR.code,
  };
  const toPocket = {
    currency: currencies.CHF.code,
  };
  const rate = '1.2039';

  return (
    <main className={styles.container}>
      <form name="exchange" action="/">
        <Pocket currency={fromPocket.currency} type="from" />
        <SwapPocketsButton />
        <ExchangeRate from={fromPocket.currency} rate={rate} to={toPocket.currency} />
        <Pocket currency={toPocket.currency} type="to" />
        <Button />
      </form>
    </main>
  );
};

export default Exchange;
