import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { randomPassword } from '../../lib/string';
import markdown from './randomPassword.md';

const story = () => {
  const len = number('Length', 15);

  return (
    <div>
      <div>Length: {len}</div>
      <p>
        Result: <strong>{randomPassword(len)}</strong>
      </p>
    </div>
  );
};

storiesOf('String|randomPassword', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
