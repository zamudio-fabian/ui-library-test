import type { Meta, StoryObj } from '@storybook/angular';
import { UiButton } from './ui-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<UiButton> = {
  title: 'UI/UiButton',
  component: UiButton,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<UiButton>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
};
