import { Meta, StoryFn } from '@storybook/react'
import { TextField } from './TextField'

export default {
    title: 'Input',
    component: TextField,
} as Meta

const Template: StoryFn = (args: any) => <TextField {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Площадь участка, га',
    placeholder: 'Например, 600',
}
