
# historyState

<p>
  Pushes or replaces with new history state. Returns false in case of the same page/url.
</p>

### Usage

#### pushHistoryState

```js

import {pushHistoryState, replaceHistoryState} from '@nejcm/js-helpers';

const obj = {};
const title = 'New page';
const path = '/new-path';
const queryString = 'queryString=1';
pushHistoryState(obj, title, path, queryString);  // true

```
<br />

#### replaceHistoryState

```js

import {replaceHistoryState} from '@nejcm/js-helpers';

const obj = {};
const title = 'New page';
const path = '/new-path';
const queryString = 'queryString=1';
replaceHistoryState(obj, title, path, queryString);  // true

```