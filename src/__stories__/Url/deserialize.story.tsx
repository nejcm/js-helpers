import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { deserialize } from '../../lib/url';
import markdown from './deserialize.md';

const story = () => {
  const str = 'key=123&key2=hei';

  return (
    <div>
      <div>String: {str}</div>
      <p>
        Result: <strong>{JSON.stringify(deserialize(str))}</strong>
      </p>
    </div>
  );
};

storiesOf('Url|deserialize', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
