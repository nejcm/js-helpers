
# curry

<p>
  Returs a curried version of the function
</p>

### Usage

```js

import {curry} from '@nejcm/js-helpers';

// Calcs rectangle surface area
const func = (l, w, h) => 2 * l * w + 2 * l * h + 2 * w * h;
// Returns curried function with rectangle width 10
const curried = curry(func);
const rectangle10 = curried(10); 
const surface = curried(20)(5); // == curried(10)(20)(5) == func(10, 20, 5)

```