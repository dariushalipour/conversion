const getUnit = (units) => (symbol) => {
  const unit = units[symbol];
  if (typeof unit === 'undefined') {
    const possibleUnits = Object.keys(units).join(',');
    const errorMessage = `${symbol}' is not a unit`;
    const hint = `possible units: [${possibleUnits}]`;
    throw new Error(`'${errorMessage}, ${hint}`);
  }

  return unit;
};

export default getUnit;
