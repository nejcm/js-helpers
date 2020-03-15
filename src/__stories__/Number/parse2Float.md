
# parse2Float

<p>
  Returns parsed string as float with optional fallback.
</p>

### Usage

```js

import {parse2Float} from '@nejcm/js-helpers';

const str = "250.82";
const result = parse2Float(str);  // 250.82

```
<br/>

#### With fallback

```jsx

import {parse2Float} from '@nejcm/js-helpers';

const str = "aaa";
const fallback = 20.55;
const result = parse2Float(str, fallback);  // 20.55

```