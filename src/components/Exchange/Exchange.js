import React, { useEffect } from 'react';
import root from 'window-or-global';
import { func, shape, string } from 'prop-types';
import Button from 'components/Forms/Button';
import ExchangeRate from 'components/ExchangeRate';
import Pocket from 'components/Pocket';
import SwapPocketsButton from 'components/SwapPocketsButton';
import * as currencies from 'constants/currencies';
import styles from './exchange.css';

const FETCH_INTERVAL = 10000;
const symbols = ['GBP', 'EUR', 'USD'];
const Exchange = ({ fromPocket, getCurrencyExchangeRates, rates, toPocket }) => {
  useEffect(() => {
    getCurrencyExchangeRates('GBP', symbols);
    const id = root.setInterval(() => getCurrencyExchangeRates('GBP', symbols), FETCH_INTERVAL);
    return () => root.clearInterval(id);
  }, []);

  return (
    <main className={styles.container}>
      <form name="exchange" action="/">
        <Pocket amount="109.54" currency={fromPocket.currency} type="from" />
        <section className={styles.exchangeRateContainer}>
          <SwapPocketsButton />
          <ExchangeRate
            from={fromPocket.currency}
            rate={rates && rates.EUR && rates.EUR.toString()}
            to={toPocket.currency}
          />
        </section>
        <Pocket currency={toPocket.currency} type="to" />
        <Button />
      </form>
    </main>
  );
};

Exchange.propTypes = {
  fromPocket: shape({ currency: string }),
  getCurrencyExchangeRates: func.isRequired,
  toPocket: shape({ currency: string }),
};

Exchange.defaultProps = {
  fromPocket: { currency: currencies.USD.code },
  rates: {},
  toPocket: { currency: currencies.CHF.code },
};

export default Exchange;
