import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { measure2Css } from '../../lib/style';
import markdown from './measure2Css.md';

const story = () => {
  const measure = text('Measure', '10');
  const val = /^\d+$/.test(measure) ? parseInt(measure, 10) : measure;

  return (
    <div>
      <div>Measure: {measure}</div>
      <p>
        Result: <strong>{measure2Css(val)}</strong>
      </p>
    </div>
  );
};

storiesOf('Style|measure2Css', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
