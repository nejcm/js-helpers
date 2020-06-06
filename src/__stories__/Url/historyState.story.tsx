import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import markdown from './historyState.md';

const story = () => {

  return (
    <div>
      <ul>
        <li>pushHistoryState</li>
        <li>replaceHistoryState</li>
      </ul>
    </div>
  );
};

storiesOf('Url|historyState', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
