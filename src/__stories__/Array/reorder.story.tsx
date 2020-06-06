import { array, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { reorder } from '../../lib/array';
import markdown from './reorder.md';

const story = () => {
  const arr = array('Array',  ['1', '2', '3', '4', '5', '6']);
  const from = number('From', 3);
  const to = number('To', 1);

  const rArr = reorder(arr, from, to);
  
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Move from ${from} to ${to}.`}</i><br/>
        Result: <strong>[{rArr?.toString()}]</strong>
      </p>
    </div>
  );
};

storiesOf('Array|reorder', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
