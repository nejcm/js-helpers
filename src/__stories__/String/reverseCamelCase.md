
# reverseCamelCase

<p>
  Returns a sentence from camel case word and optionally skips abbreviations.
</p>

### Usage

```js

import {reverseCamelCase} from '@nejcm/js-helpers';

const str = 'helloMike';
const result = replace(str);  // 'hello Mike'

```
<br />

#### Allow abbreviations

```js

import {reverseCamelCase} from '@nejcm/js-helpers';

const str = 'ABC';
const result = replace(str, true);  // ABC

```