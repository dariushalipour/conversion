import createUnitGetter from './getUnit';

const units = {
  'm': 1e+0,
  'meter': 1e+0,
  'in': 0.0254,
  'inch': 0.0254,
  'ft': 0.0254 * 12,
  'feet': 0.0254 * 12,
};

const getUnit = createUnitGetter(units);

const convert = (from = 'm', to = 'm') => (value = 1) => (
  getUnit(from) / getUnit(to) * value
);

export default convert;
