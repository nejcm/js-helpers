import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { get } from '../../lib/object';
import markdown from './get.md';

const story = () => {
  const obj = {
    k1: 1,
    k2: {
      k3: {
        k4: 10
      },
      k5: 'Hello!'
    },
    k6: 'Yes'
  };

  const key = text('Key', 'k2.k3.k4');
  const fallback = text('Fallback', 'Hey.');

  return (
    <div>
      <div>Object: {JSON.stringify(obj)}</div>
      <div>Key: {key}</div>
      <p>
        Result: <strong>{JSON.stringify(get(obj, key, fallback))}</strong>
      </p>
    </div>
  );
};

storiesOf('Object|get', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
