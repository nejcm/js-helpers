import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { runFunction } from '../../lib/function';
import markdown from './runFunction.md';

const story = () => {
  const func = (val) => `Value is: ${val}`; 
  const value = text('Value', '1');

  return (
    <div>
      <div>Function: {func.toString()}</div>
      <div>Value: {value}</div>
      <p>
        Result: <strong>{runFunction(func, value).toString()}</strong>
      </p>
    </div>
  );
};

storiesOf('Function|runFunction', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
