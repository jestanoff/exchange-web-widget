import * as types from './types';

const getCurrencyExchangeRates = (base, symbols) => dispatch => {
  dispatch({ type: types.GET_RATES_REQUEST });
  const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols.join()}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => dispatch({ type: types.GET_RATES_SUCCESS, data }))
    .catch(error => dispatch({ type: types.GET_RATES_FAILURE, error }));
};

export default getCurrencyExchangeRates;
