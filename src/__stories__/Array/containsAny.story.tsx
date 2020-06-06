import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { containsAny } from '../../lib/array';
import markdown from './containsAny.md';

const story = () => {
  const arr = array('Array', ['1', '2', '3', '4', '5', '6']);
  const contains = array('Contains', ['9', '10']);
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Check if array contains any ${contains.toString()}.`}</i><br/>
        Result: <strong>{containsAny(arr, contains).toString()}</strong>
      </p>
    </div>
  );
};

storiesOf('Array|containsAny', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
