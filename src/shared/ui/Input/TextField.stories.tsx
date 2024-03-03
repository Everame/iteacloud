import { TextField } from './TextField'
import { Meta, Story } from '@storybook/react'

export default {
    title: 'Input',
    component: TextField,
} as Meta

const Template: Story = (args: any) => <TextField {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Площадь участка, га',
    placeholder: 'Например, 600',
}
