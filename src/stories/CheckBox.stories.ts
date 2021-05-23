import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CheckBoxComponent } from '../app/check-box/check-box.component';

export default {
  title: 'Example/Check Box',
  component: CheckBoxComponent,
} as Meta;

const Template: Story<CheckBoxComponent> = (args: CheckBoxComponent) => ({
  component: CheckBoxComponent,
  props: args,
});

export const checked = Template.bind({});
checked.args = {
    checked: '',
};



export const label = Template.bind({});
label.args = {
  label: 'checkbox',
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  isdisabled : true
};

