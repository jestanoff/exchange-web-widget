import { connect } from 'react-redux';
import getCurrencyExchangeRates from 'actions/getCurrencyExchangeRates';
import Exchange from './Exchange';

const mapPropsToState = state => ({
  rates: state && state.fxRates && state.fxRates.rates,
});

const mapDispatchToState = {
  getCurrencyExchangeRates,
};

export default connect(mapPropsToState, mapDispatchToState)(Exchange);
