import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { filterEmpty } from '../../lib/object';
import markdown from './filterEmpty.md';

const story = () => {
  const obj = {
      k1: 1,
      k2: null,
      k3: null,
      k4: 4
    };

  return (
    <div>
      <div>Object: {JSON.stringify(obj)}</div>
      <p>
        Result: <strong>{JSON.stringify(filterEmpty(obj))}</strong>
      </p>
    </div>
  );
};

storiesOf('Object|filterEmpty', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
