---
to: projects/components/ui-library/src/lib/components/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/angular';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.param(name) %>.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<<%= h.changeCase.pascal(name) %>> = {
  title: 'UI/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<<%= h.changeCase.pascal(name) %>>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
};
