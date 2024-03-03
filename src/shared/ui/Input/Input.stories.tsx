import { Input } from './Input'
import { Meta, Story } from '@storybook/react'

export default {
    title: 'Input',
    component: Input,
} as Meta

const Template: Story = (args: any) => <Input {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Площадь участка, га',
    placeholder: 'Например, 600',
}
