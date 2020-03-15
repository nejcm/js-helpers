
# serialize

<p>
  Returns a serialized object with optionally removed empty values
</p>

### Usage

```js

import {serialize} from '@nejcm/js-helpers';

const obj = {
  key: 123,
  key2: 'hei',
  key3: null,
};
const result = serialize(obj);  // 'key=123&key2=hei'

```
<br />

#### With kept empty values:

```js

import {serialize} from '@nejcm/js-helpers';

const obj = {
  key: 123,
  key2: 'hei',
  key3: null,
};
const result = serialize(obj, false);  // 'key=123&key2=hei&key3=null'

```