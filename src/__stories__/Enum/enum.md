
# enum

<p>
  Convert object to enum class.
</p>

### Usage

```js

import {Enum} from '@nejcm/js-helpers';

const OrderStatus = {
  DECLINED: -1,
  CANCELED: 0,
  DRAFT: 1,
  PENDING: 2,
  COMPLETED: 3,

  properties: {
    [-1]: {
      key: 'declined',
      value: -1,
      color: 'red',
      name: 'Declined state',
    },
    0: {key: 'canceled', value: 0, color: 'red', name: 'Canceled state'},
    1: {key: 'draft', value: 1, color: 'blue', name: 'Draft state'},
    2: {
      key: 'pending',
      value: 2,
      color: 'orange',
      name: 'Pending state',
    },
    3: {
      key: 'completed',
      value: 2,
      color: 'green',
      name: 'Completed state',
    },
  },
};

```
<br />

#### Create enum

```js
const statusEnum = new Enum(OrderStatus);
```
<br />

#### Get value

```js
const value = statusEnum.PENDING; // 2
// or
const value2 = statusEnum.getValue('PENDING') // 2
```
<br />

#### Check if enum exists

```js
const has = statusEnum.has('DECLINED'); // true
```
<br />

#### Get all values

```js
const all = statusEnum.all(); // ['DECLINED', 'CANCELED', 'DRAFT', 'PENDING', 'COMPLETED']
```
<br />

#### Get all values without excluded

```js
const allExcluded = statusEnum.all(statusEnum.DRAFT, statusEnum.DECLINED); // ['CANCELED', 'PENDING', 'COMPLETED']
```
<br />

#### Get property

```js
const color = statusEnum.getProperty(OrderStatus.CANCELED, 'color'); // 'red'
```
<br />

#### Get property with fallback

```js
const color2 = statusEnum.getProperty(OrderStatus.CANCELED, 'color_', 'pink')  // 'pink'
```
<br />

#### Get property by key

```js
const colorByKey = statusEnum.getPropertyByKey('CANCELED', 'color', 'orange'); // 'red'
```
<br />

#### Get iterator

```js
const iter = [...statusEnum]; // ['DECLINED', 'CANCELED', 'DRAFT', 'PENDING', 'COMPLETED']
```