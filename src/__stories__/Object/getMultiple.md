
# getMultiple

<p>
  Return object multiple values.
</p>

### Usage

```js

import {getMultiple} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: {
    k3: {
      k4: 10
    }
  },
  k5: 'Hello!'
};
const result = getMultiple(obj, ['k2.k3.k4', 'k1']); // [10, 1]

```