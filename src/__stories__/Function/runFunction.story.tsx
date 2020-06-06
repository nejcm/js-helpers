import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { runFunction } from '../../lib/function';
import markdown from './runFunction.md';

const story = () => {
  const value = text('Value', '1');
  const func = (val: string) => `Value is: ${val}`; 

  return (
    <div>
      <div>Function: {func.toString()}</div>
      <div>Value: {value}</div>
      <p>
        Result: <strong>{runFunction(func, value) as string}</strong>
      </p>
    </div>
  );
};

storiesOf('Function|runFunction', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
