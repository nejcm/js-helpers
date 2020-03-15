import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { camelCase2Word } from '../../lib/string';
import markdown from './camelCase2Word.md';

const story = () => {
  const camel = text('Camel case', 'helloMike');
  const abbr = boolean('Abbreviations', false);

  return (
    <div>
      <div>Camel case: {camel}</div>
      <div>Abbreviations: {abbr.toString()}</div>
      <p>
        Result: <strong>{camelCase2Word(camel, abbr)}</strong>
      </p>
    </div>
  );
};

storiesOf('String|camelCase2Word', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
