import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { serialize } from '../../lib/url';
import markdown from './serialize.md';

const story = () => {
  const obj = {
    key: 123,
    key2: 'hei',
    key3: null,
    key4: undefined,
    key5: 'Mike'
  };
  const empty = boolean('Remove empty values', true);

  return (
    <div>
      <div>Obj: {JSON.stringify(obj)}</div>
      <div>Remove empty: {empty.toString()}</div>
      <p>
        Result: <strong>{serialize(obj, empty)}</strong>
      </p>
    </div>
  );
};

storiesOf('Url|serialize', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
