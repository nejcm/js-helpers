import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { getMultiple } from '../../lib/object';
import markdown from './getMultiple.md';

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

  const keys = ['k6', 'k2.k3'];

  return (
    <div>
      <div>Object: {JSON.stringify(obj)}</div>
      <div>Keys: [{keys.toString()}]</div>
      <p>
        Result: <strong>{JSON.stringify(getMultiple(obj, keys))}</strong>
      </p>
    </div>
  );
};

storiesOf('Object|getMultiple', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
