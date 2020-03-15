import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { parse2Float } from '../../lib/number';
import markdown from './parse2Float.md';

const story = () => {
  const str = text('String number', '250.82');
  const fallback = number('Fallback', 20.55); 

  return (
    <div>
      <div>String number: {str}</div>
      <div>Fallback: {fallback}</div>
      <p>
        Result: <strong>{parse2Float(str, fallback)}</strong>
      </p>
    </div>
  );
};

storiesOf('Number|parse2Float', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
