
# formatBytes

<p>
  Returns formated bytes with the decimal size (0 are stripped from decimals)
</p>

### Usage

```js

import {formatBytes} from '@nejcm/js-helpers';

const bytes = 2048;
const decimals = 3;
const result = formatBytes(bytes, decimals);  // 2 KB

```
<br/>

#### With default decimal places (2):

```js

import {formatBytes} from '@nejcm/js-helpers';

const bytes = 3.65 * 1024 * 1024;
const result = formatBytes(bytes);  // 3.65 MB

```