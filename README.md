# conversion
a javascript library for unit conversions and organizations

## usage

### .organize(units, options)(value)

```js
import { organize } from 'conversion';

const myCustomOrganizer = organize([60, 60, 24, 7]);
const output = myCustomOrganizer(24 * 60 * 60);
// output is [1, 0, 0, 0], which means, 1 day, 0 hours, 0 minutes and 0 seconds

// if strict is set to true, the output array length will fill unreached higher units with 0
const myStrictOrganizer = organize([60, 60, 24, 7], {strict: true});
const output = myStrictOrganizer(24 * 60 * 60);
// output is [0, 1, 0, 0, 0], which means, 0 weeks, 1 day, 0 hours, 0 minutes and 0 seconds

// if strict is set to true, the output array length will fill unreached higher units with 0
const output = myCustomOrganizer(14 * 24 * 60 * 60 + 1);
// output is [2, 0, 0, 0, 1], which means, 2 weeks and 1 second
```
