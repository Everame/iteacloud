import { Meta, StoryFn } from '@storybook/react'
import StatField from './StatField'

export default {
    title: 'StatField',
    component: StatField,
} as Meta

const Template: StoryFn = (args: any) => <StatField {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Площадь (га)',
    value: '600',
}
