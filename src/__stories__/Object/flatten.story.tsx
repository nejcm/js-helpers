import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { flatten } from '../../lib/object';
import markdown from './flatten.md';

const story = () => {
  const obj = {
    k1: 1,
    k2: {
      k3: 3,
    },
  };

  const prefix = text('Prefix', '');

  return (
    <div>
      <div>Object: {JSON.stringify(obj)}</div>
      <div>Prefix: {prefix}</div>
      <p>
        Result: <strong>{JSON.stringify(flatten(obj, prefix))}</strong>
      </p>
    </div>
  );
};

storiesOf('Object|flatten', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
