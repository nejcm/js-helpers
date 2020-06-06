import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { groupBy } from '../../lib/array';
import markdown from './groupBy.md';

const story = () => {
  const arr = array('Array',  ['10', '20', '30', '40', '50', '60']);
  const condition = (item: string) => parseInt(item) > 40;
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Group array by condition '${condition}'.`}</i><br/>
        Result: <strong>{JSON.stringify(groupBy(arr, condition))}</strong>
      </p>
    </div>
  );
};

storiesOf('Array|groupBy', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
