import { Card } from '../components/Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Second = {
  args: {
    primary: true,
    label: 'Button',
  },
};
export const Third = {
  args: {
    primary: true,
    label: 'Button',
  },
};
export const Fourth = {
  args: {
    primary: true,
    label: 'Button',
  },
};
export const Fifth = {
  args: {
    primary: true,
    label: 'Button',
  },
};

