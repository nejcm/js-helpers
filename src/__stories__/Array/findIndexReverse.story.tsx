import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { findIndexReverse } from '../../lib/array';
import markdown from './findIndexReverse.md';

const story = () => {
  const arr = array('Array', ['1', '2', '3', '4', '5', '6']);
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Example condition: (item) => item < 5`}</i><br/>
        Result: <strong>{findIndexReverse(arr, (item) => parseInt(item) < 5).toString()}</strong>
      </p>
    </div>
  );
};

storiesOf('Array|findIndexReverse', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
