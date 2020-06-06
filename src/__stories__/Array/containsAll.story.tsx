import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { containsAll } from '../../lib/array';
import markdown from './containsAll.md';

const story = () => {
  const arr = array('Array', ['1', '2', '3', '4', '5', '6']);
  const contains = array('Contains', ['5', '6']);
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Check if array contains ${contains.toString()}.`}</i><br/>
        Result: <strong>{containsAll(arr, contains).toString()}</strong>
      </p>
    </div>
  );
};

storiesOf('Array|containsAll', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
