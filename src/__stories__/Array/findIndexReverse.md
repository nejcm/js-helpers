
# findIndexReverse

<p>
  Finds item index in array that meets condition from last to first.
</p>

### Usage

```js

import {findIndexReverse} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = findIndexReverse(arr, (item) => item < 5); // 3

```
<br/>

#### Without condition:

```js

import {findIndexReverse} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = findIndexReverse(arr); // 5

```