
# camelCase2Word

<p>
  Returns a sentence from camel case word and optionally skips abbreviations.
</p>

### Usage

```js

import {camelCase2Word} from '@nejcm/js-helpers';

const str = 'helloMike';
const result = replace(str);  // 'hello Mike'

```
<br />

#### Allow abbreviations

```js

import {camelCase2Word} from '@nejcm/js-helpers';

const str = 'ABC';
const result = replace(str, true);  // ABC

```