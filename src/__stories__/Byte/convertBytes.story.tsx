import { number, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { convertBytes, sizes } from '../../lib/byte';
import markdown from './convertBytes.md';

const options = sizes.reduce((a, b) => {
  a[b] = b;
  return a;
}, {});

const story = () => {
  const bytes = number('Bytes', 5 * 1024 * 1024);
  const from = select('From', options, 'B');
  const to = select('To', options, 'MB');
  const decimals = number('Decimals', 2);

  return (
    <div>
      <div>Bytes: {bytes.toString()}</div>
      <p>
        <i>{`Convert bytes from ${from} to ${to} with ${decimals} decimals.`}</i><br/>
        Result: <strong>{convertBytes(bytes, from, to, decimals)}</strong>
      </p>
    </div>
  );
};

storiesOf('Byte|convertBytes', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
