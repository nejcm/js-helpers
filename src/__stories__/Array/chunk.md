
# chunk

<p>
  Returns chunked array by size.
</p>

### Usage

```js

import {chunk} from '@nejcm/js-utils';

const array = [10, 20, 30, 40, 50, 60];
const result = chunk(array, 4); 
/* 
  [
    [10, 20, 30, 40],
    [50, 60],
  ]
*/

```