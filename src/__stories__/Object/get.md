
# get

<p>
  Returns object value or optional fallback.
</p>

### Usage

```js

import {get} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: {
    k3: {
      k4: 10
    }
  },
};
const result = get(obj, 'k2.k3.k4'); // 10

```
<br />

#### With fallback

```js

import {get} from '@nejcm/js-helpers';

const obj = {
  k1: 1,
  k2: {
    k3: {
      k4: 10
    }
  },
};
const result = get(obj, 'k2.k3.k5', 'yes'); // 'yes'

```