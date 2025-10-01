import React from 'react';
import CheckboxList from '../components/CheckboxList';

export default {
  title: 'Components/CheckboxList',
  component: CheckboxList,
  parameters: {
    layout: 'padded',
  },
};

export const Default = () => <CheckboxList />;

Default.storyName = 'Default Checkbox List';
