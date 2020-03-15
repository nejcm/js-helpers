
# replace

<p>
  Returns a string with replaced values.
</p>

### Usage

```js

import {replace} from '@nejcm/js-helpers';

const str = 'Hello {{name}}!';
const values = {
  name: 'Mike'
};
const result = replace(str, values);  // 'Hello Mike!'

```