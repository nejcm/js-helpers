import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { curry } from '../../lib/function';
import markdown from './curry.md';

const story = () => {
  const func = (length, width, heigth) => 2 * length * width + 2 * length * heigth + 2 * width * heigth;
  const curried = curry(func);
  const l = number('Length', 20);
  const w = number('Width', 15);
  const h = number('Height', 8);

  return (
    <div>
      <h5>Calculate rectangle surface area.</h5>
      <div>Function: {func.toString()}</div>
      <p>
        Curried function: <strong>{curry(func).toString()}</strong><br />
      </p>
      <p>
        Result of function: <strong>{func(l,w,h)}</strong><br />
        Result of curried function: <strong>{curried(l)(w)(h)}</strong><br />
      </p>
    </div>
  );
};

storiesOf('Function|curry', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
