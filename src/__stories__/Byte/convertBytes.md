
# convertBytes

<p>
  Returns converted bytes from/to with the specific decimals.
</p>

### Usage

```js

import {convertBytes, sizes} from '@nejcm/js-helpers';

// sizes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

const bytes = 2048;
const from = 'B';
const to = 'MB';
const decimals = 3;
const result = convertBytes(bytes, from, to, decimals);  // 2 KB

```
<br/>

#### With default decimal places (2):

```js

import {convertBytes, sizes} from '@nejcm/js-helpers';

const bytes = 3.65 * 1024 * 1024;
const from = 'B';
const to = 'MB';
const result = convertBytes(bytes, from, to);  // 3.65 MB

```