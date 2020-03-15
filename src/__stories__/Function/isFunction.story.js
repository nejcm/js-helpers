import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { isFunction } from '../../lib/function';
import markdown from './isFunction.md';

const story = () => {
  const func = () => 'This is a function!';

  return (
    <div>
      <div>Function: {func.toString()}</div>
      <p>
        Result: <strong>{isFunction(func).toString()}</strong>
      </p>
    </div>
  );
};

storiesOf('Function|isFunction', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
