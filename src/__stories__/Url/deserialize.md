
# deserialize

<p>
  Returns a deserialized string
</p>

### Usage

```js

import {deserialize} from '@nejcm/js-helpers';

const str = 'key=123&key2=hei';
const result = deserialize(obj);
/*
  {
    key: '123',
    key2: 'hei',
  }
*/

```