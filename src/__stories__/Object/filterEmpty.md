
# filterEmpty

<p>
  Return object with filtered emptry values.
</p>

### Usage

```js

import {filterEmpty} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: null,
  k3: undefined,
};
const result = filterEmpty(obj); // { k1: 1 }

```