import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { hex2rgba } from '../../lib/color';
import markdown from './hex2rgba.md';

const story = () => {
  const color = text('Hex color', '#fff');
  const opacity = number('Opacity', 1);

  return (
    <div>
      <div>Color: {color}</div>
      <div>Opacity: {opacity}</div>
      <p>
        Result: <strong>[{hex2rgba(color, opacity).toString()}]</strong>
      </p>
    </div>
  );
};

storiesOf('Color|hex2rgba', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
