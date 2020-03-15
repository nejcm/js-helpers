
# groupBy

<p>
  Returns object with grouped arrays by condition or value.
</p>

### Usage

```js

import {groupBy} from '@nejcm/js-helpers';

// by parameter value
const array = [
  {group: 1, value: 0},
  {group: 1, value: 1},
  {group: 2, value: 2},
  {group: 1, value: 3},
  {group: 3, value: 4},
];
const result = groupBy(array, 'group'); 
/* 
  {
    1: [
      {group: 1, value: 0},
      {group: 1, value: 1},
      {group: 1, value: 3},
    ],
    2: [{group: 2, value: 2}],
    3: [{group: 3, value: 4}],
  }
*/

```
<br/>

#### With condition:

```js

import {groupBy} from '@nejcm/js-helpers';

const array = [10, 20, 30, 40, 50, 60];
const result = groupBy(array, (item) => item > 20); 
/* 
  {
    false: [10, 20],
    true: [30, 40, 50, 60],
  }
*/

```