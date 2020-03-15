
# containsAny

<p>
  Returns boolean if array contains any of the elements.
</p>

### Usage

```js

import {containsAny} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = containsAny(array, [9, 8, 6]); // true
const result2 = containsAny(array, [9, 10]); // false

```
<br/>

#### With single element supplied:

```js

import {containsAny} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = containsAny(array, 5); // true

```