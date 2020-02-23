import getCurrencyCodes from './getCurrencyCodes';

describe('getCurrencyCodes', () => {
  test('should return an array of currency codes', () => {
    const currencies = {
      EUR: { code: 'EUR' },
      USD: { code: 'USD' },
    };

    expect(getCurrencyCodes(currencies)).toEqual(['EUR', 'USD']);
  });

  test('should return undefined if no currency codes exist', () => {
    expect(getCurrencyCodes()).toEqual(undefined);
  });

  test('should return an array only from the currencies that contain a code', () => {
    const currencies = {
      EUR: { code: 'EUR' },
      USD: null,
      GBP: {},
    };

    expect(getCurrencyCodes(currencies)).toEqual(['EUR']);
  });
});
