import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { ellipsis } from '../../lib/string';
import markdown from './ellipsis.md';

const story = () => {
  const str = text('String', 'Hello world!');
  const len = number('Length', 5);

  return (
    <div>
      <div>String: {str}</div>
      <div>Length: {len}</div>
      <p>
        Result: <strong>{ellipsis(str, len)}</strong>
      </p>
    </div>
  );
};

storiesOf('String|ellipsis', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
