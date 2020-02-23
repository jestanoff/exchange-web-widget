import reducer from './';

describe('fxRates reducer', () => {
  test('should return unchanged state if no type matches', () => {
    const action = { type: 'UNMATCHED_TYPE' };
    const state = { rates: undefined, additionalData: 1 };

    expect(reducer(state, action)).toMatchObject(state);
  });
});
