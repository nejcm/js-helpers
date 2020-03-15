import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { parse2Integer } from '../../lib/number';
import markdown from './parse2Integer.md';

const story = () => {
  const str = text('String number', '250');
  const fallback = number('Fallback', 10);

  return (
    <div>
      <div>String number: {str}</div>
      <div>Fallback: {fallback}</div>
      <p>
        Result: <strong>{parse2Integer(str, fallback)}</strong>
      </p>
    </div>
  );
};

storiesOf('Number|parse2Integer', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
