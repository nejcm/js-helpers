import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { isDefined } from '../../lib/var';
import markdown from './isDefined.md';

const story = () => {
const value = text('Value', null);

  return (
    <div>
      <div>Value: {value}</div>
      <p>
        Result: <strong>{isDefined(value)}</strong>
      </p>
    </div>
  );
};

storiesOf('Var|isDefined', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
