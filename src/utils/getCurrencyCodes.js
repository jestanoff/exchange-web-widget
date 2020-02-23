export default currencies => {
  if (currencies) {
    return Object.values(currencies).reduce(
      (accu, currency) => (currency && currency.code ? [...accu, currency.code] : accu),
      [],
    );
  }

  return undefined;
};
