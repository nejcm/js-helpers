
# findReverse

<p>
  Finds item in array that meets condition from last to first.
</p>

### Usage

```js

import {findReverse} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = findReverse(arr, (item) => item < 5); // 4

```
<br/>

#### Without condition:

```js

import {findReverse} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = findReverse(arr); // 6

```