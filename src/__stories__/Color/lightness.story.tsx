import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { lightness } from '../../lib/color';
import markdown from './lightness.md';

const story = () => {
  const color = text('Hex color', '#fff');

  return (
    <div>
      <div>Color: {color}</div>
      <p>
        Result: <strong>{lightness(color)}</strong>
      </p>
    </div>
  );
};

storiesOf('Color|lightness', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
