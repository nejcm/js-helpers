import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { formatBytes } from '../../lib/byte';
import markdown from './formatBytes.md';

const story = () => {
  const bytes = number('Bytes', 2000);
  const decimals = number('Decimals', 2);
  return (
    <div>
      <div>Bytes: {bytes.toString()}</div>
      <p>
        <i>{`Formats bytes to ${decimals} decimals.`}</i><br/>
        Result: <strong>{formatBytes(bytes, decimals)}</strong>
      </p>
    </div>
  );
};

storiesOf('Byte|formatBytes', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
