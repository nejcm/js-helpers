import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { containsAny } from '../../lib/array';
import markdown from './containsAny.md';

const convertArr = (arr) => arr.map((item) => parseFloat(item, 10)); 

const story = () => {
  const arr = array('Array', [1, 2, 3, 4, 5, 6]);
  const contains = array('Contains', [9, 10]);
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Check if array contains any ${contains.toString()}.`}</i><br/>
        Result: <strong>{containsAny(convertArr(arr), convertArr(contains)).toString()}</strong>
      </p>
    </div>
  );
};

storiesOf('Array|containsAny', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
