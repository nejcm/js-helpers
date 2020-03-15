
# parse2Integer

<p>
  Returns parsed string as integer with optional fallback.
</p>

### Usage

```js

import {parse2Integer} from '@nejcm/js-helpers';

const str = "250";
const result = parse2Integer(str);  // 250

```
<br/>

#### With fallback

```jsx

import {parse2Integer} from '@nejcm/js-helpers';

const str = "aaa";
const fallback = 100;
const result = parse2Integer(str, fallback);  // 100

```