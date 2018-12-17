import createUnitGetter from './getUnit';

const units = {
  'Y': 1e+24,
  'yotta': 1e+24,
  'Z': 1e+21,
  'zetta': 1e+21,
  'E': 1e+18,
  'exa': 1e+18,
  'P': 1e+15,
  'peta': 1e+15,
  'T': 1e+12,
  'tera': 1e+12,
  'G': 1e+9,
  'giga': 1e+9,
  'M': 1e+6,
  'mega': 1e+6,
  'k': 1e+3,
  'kilo': 1e+3,
  'h': 1e+2,
  'hecto': 1e+2,
  'da': 1e+1,
  'deka': 1e+1,
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
  'p': 1e-12,
  'pico': 1e-12,
  'f': 1e-15,
  'femto': 1e-15,
  'a': 1e-18,
  'atto': 1e-18,
  'z': 1e-21,
  'zepto': 1e-21,
  'y': 1e-24,
  'yocto': 1e-24,
};

const getUnit = createUnitGetter(units);

const convert = (from = '_', to = '_') => (value = 1) => (
  getUnit(from) / getUnit(to) * value
);

export default convert;
