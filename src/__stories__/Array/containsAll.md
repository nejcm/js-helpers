
# containsAll

<p>
  Returns boolean if array contains all elements.
</p>

### Usage

```js

import {containsAll} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = containsAll(array, [1, 5, 6]); // true
const result2 = containsAll(array, [2, 3, 8]); // false

```
<br/>

#### With single element supplied:

```js

import {containsAll} from '@nejcm/js-helpers';

const array = [1, 2, 3, 4, 5, 6];
const result = containsAll(array, 5); // true

```