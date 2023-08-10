import type { Meta, StoryObj } from '@storybook/angular';
import { Example } from './example.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Example> = {
  title: 'UI/Example',
  component: Example,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<Example>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
};
