import { array, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { chunk } from '../../lib/array';
import markdown from './chunk.md';

const story = () => {
  const arr = array('Array', [10,20,30,40,50,60]);
  const chunkSize = number('Chunk size', 4);
  return (
    <div>
      <div>Array: [{arr.toString()}]</div>
      <p>
        <i>{`Chunk array per '${chunkSize}' items.`}</i><br/>
        Result: <strong>{JSON.stringify(chunk(arr, chunkSize))}</strong>
      </p>
    </div>
  );
};

storiesOf('Array|chunk', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
