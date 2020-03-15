
# hex2rgba

<p>
  Returns converted hex color value as rgba.
</p>

### Usage

```js

import {hex2rgba} from '@nejcm/js-helpers';

const color = "#fff";
const opacity = .5;
const result = hex2rgba(color, opacity);  // [255, 255, 255, 0.5]

```
<br/>

#### With default opacity (1):

```jsx

import {hex2rgba} from '@nejcm/js-helpers';

const color = "#000000";
const result = hex2rgba(color);  // [0, 0, 0, 1]

```