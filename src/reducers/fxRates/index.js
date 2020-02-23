const initialState = {
  rates: undefined,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ANY':
      return {
        rates: 'any',
      };

    default:
      return state;
  }
};
