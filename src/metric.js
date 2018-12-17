const units = {
  'M': 1e+6,
  'mega': 1e+6,
  'k': 1e+3,
  'kilo': 1e+3,
  '_': 1e+0,
  'd': 1e-1,
  'deci': 1e-1,
  'c': 1e-2,
  'centi': 1e-2,
  'm': 1e-3,
  'mili': 1e-3,
  'µ': 1e-6,
  'micro': 1e-6,
  'n': 1e-9,
  'nano': 1e-9,
};

const getUnit = (symbol) => {
  const unit = units[symbol];
  if (typeof unit === 'undefined') {
    const possibleUnits = Object.keys(units).join(',');
    const errorMessage = `${symbol}' is not a unit`;
    const hint = `possible units: [${possibleUnits}]`;
    throw new Error(`'${errorMessage}, ${hint}`);
  }

  return unit;
};

const convert = (from = '_', to = '_') => (value) => (
  getUnit(from) / getUnit(to) * value
);

export default convert;
