import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { parse2Integer } from '../../lib/number';
import { measure2Css } from '../../lib/style';
import markdown from './measure2Css.md';

const story = () => {
  const measure = text('Measure', 10);
  const val = /^\d+$/.test(measure) ? parse2Integer(measure) : measure;

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
