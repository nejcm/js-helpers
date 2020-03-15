
# runFunction

<p>
  Checks if variable is a function and runs it.
</p>

### Usage

```js

import {runFunction} from '@nejcm/js-helpers';

const func = () => 'This is a function!';
const result = runFunction(func);  // This is a function!

```
<br />

#### With arguments

```js

import {runFunction} from '@nejcm/js-helpers';

const func = (args) => 'Value is: ' + args;
const result = runFunction(func, 1);  // Value is: 1

```