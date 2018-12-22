# conversion
a javascript library for unit conversions and organizations

## usage

### .organize(units, options)(value)

```js
import { organize } from 'conversion';

const myCustomOrganizer = organize([60, 60, 24, 7]);
const output = myCustomOrganizer(24 * 60 * 60);
// output is [1, 0, 0, 0], which means, 1 day, 0 hours, 0 minutes and 0 seconds

const output = myCustomOrganizer(14 * 24 * 60 * 60 + 1);
// output is [2, 0, 0, 0, 1], which means, 2 weeks and 1 second

// if strict is set to true, the output array length will fill unreached higher units with 0
const myStrictOrganizer = organize([60, 60, 24, 7], {strict: true});
const output = myStrictOrganizer(24 * 60 * 60);
// output is [0, 1, 0, 0, 0], which means, 0 weeks, 1 day, 0 hours, 0 minutes and 0 seconds
```

### .length(fromUnit, toUnit)(value)

available units: 
- 'm' / 'meter'
- 'in' / 'inch'
- 'ft' / 'feet'

### .si(fromUnit, toUnit)(value)

available units are listed in https://physics.nist.gov/cuu/Units/prefixes.html

### .combine(units)(value)
combine() is the opposite of organize()
```js
import { combine } from 'conversion';

let output;

// you can do
output = combine([60,60])('00:01:30'.split(':').map(Number))
// which returns 90

// or you can simply do
output = combine([60,60])([1, 0, 0])
// which returns 3600
```

## Usage Examples

### Metric Height to Imperial Height

```js
import { length, organize }  from 'conversion'

const ftIn = length('ft', 'in')(1) // equals 12
const meterToInch = length('meter', 'inch') // returns a function

const metricHeightToImperial = height => organize([ftIn])(meterToInch(height))

metricHeightToImperial(1.85) // equals [6, 0.8346456692913584]
```
