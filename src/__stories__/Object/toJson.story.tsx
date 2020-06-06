import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { toJson } from '../../lib/object';
import markdown from './toJson.md';

const story = () => {
  const obj = {
    k1: 1,
    k2: {
      k3: 3,
    },
  };

  return (
    <div>
      <div>Object: {JSON.stringify(obj)}</div>
      <p>
        Result: <strong>{toJson(obj)}</strong>
      </p>
    </div>
  );
};

storiesOf('Object|toJson', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
