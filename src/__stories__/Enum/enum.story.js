import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import markdown from './enum.md';

const story = () => {

  return (
    <div>
      Enum
    </div>
  );
};

storiesOf('Enum|enum', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} }); 
