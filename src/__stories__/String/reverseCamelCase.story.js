import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { reverseCamelCase } from '../../lib/string';
import markdown from './reverseCamelCase.md';

const story = () => {
  const camel = text('Camel case', 'helloMike');
  const abbr = boolean('Abbreviations', false);

  return (
    <div>
      <div>Camel case: {camel}</div>
      <div>Abbreviations: {abbr.toString()}</div>
      <p>
        Result: <strong>{reverseCamelCase(camel, abbr)}</strong>
      </p>
    </div>
  );
};

storiesOf('String|reverseCamelCase', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
