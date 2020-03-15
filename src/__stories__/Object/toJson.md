
# toJson

<p>
  Returns a json value of an object.
</p>

### Usage

```js

import {toJson} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: {
    k3: 3,
  },
};
const result = toJson(obj); 
/*
  {
    k1: 1,
    'k2.k3': 3,
  }
*/

```