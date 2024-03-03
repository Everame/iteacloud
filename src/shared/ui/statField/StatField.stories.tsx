import StatField from './StatField'
import { Meta, Story } from '@storybook/react'

export default {
    title: 'StatField',
    component: StatField,
} as Meta

const Template: Story = (args: any) => <StatField {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Площадь (га)',
    value: '600',
}
