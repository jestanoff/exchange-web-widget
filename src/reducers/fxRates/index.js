import * as types from '../../actions/types';

const initialState = {
  rates: undefined,
};

export default (state = initialState, { data, type } = {}) => {
  switch (type) {
    case types.GET_RATES_SUCCESS:
      return {
        rates: data && data.rates,
      };

    default:
      return state;
  }
};
