import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { replace } from '../../lib/string';
import markdown from './replace.md';

const story = () => {
  const str = 'Hello {{name}}!';
  const values = {
    name: 'Mike'
  };

  return (
    <div>
      <div>String: {str}</div>
      <div>Replace: {JSON.stringify(values)}</div>
      <p>
        Result: <strong>{replace(str, values)}</strong>
      </p>
    </div>
  );
};

storiesOf('String|replace', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
