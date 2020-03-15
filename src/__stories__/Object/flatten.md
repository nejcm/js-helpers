
# flatten

<p>
  Returns a flattened object with optional prefix.
</p>

### Usage

```js

import {flatten} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: {
    k3: 3,
  },
};
const result = flatten(obj); 
/*
  {
    k1: 1,
    'k2.k3': 3,
  }
*/

```
<br />

#### With prefix

```js

import {flatten} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: {
    k3: 3,
  },
};
const result = flatten(obj, 'p'); 
/*
  {
    p.k1: 1,
    'p.k2.k3': 3,
  }
*/

```