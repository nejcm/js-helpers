import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { isDefined } from '../../lib/var';
import markdown from './isDefined.md';

const story = () => {
  const value = null;
  const value2 = undefined;
  const value3 = 0;
  const value4 = 1;

  return (
    <div>
      <div>Value: {value}, Defined: <strong>{isDefined(value)}</strong></div>
      <div>Value: {value2}, Defined: <strong>{isDefined(value2)}</strong></div>
      <div>Value: {value3}, Defined: <strong>{isDefined(value3)}</strong></div>
      <div>Value: {value4}, Defined: <strong>{isDefined(value4)}</strong></div>
    </div>
  );
};

storiesOf('Var|isDefined', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
