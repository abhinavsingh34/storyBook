import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TextAreaComponent } from '../app/text-area/text-area.component';

export default {
  title: 'Example/Text Area',
  component: TextAreaComponent,
} as Meta;

const Template: Story<TextAreaComponent> = (args: TextAreaComponent) => ({
  component: TextAreaComponent,
  props: args,
});

export const rows = Template.bind({});
rows.args = {
  Rows: '',
};

export const maxlength = Template.bind({});
maxlength.args = {
  Maxlength: '',
};

export const ngModel = Template.bind({});
ngModel.args = {
  comment: '',
};
export const Checkbox = Template.bind({});
Checkbox.args = {
  isdisabled : true
};
