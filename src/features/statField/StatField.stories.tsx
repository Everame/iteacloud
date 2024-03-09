import { Meta, StoryFn } from '@storybook/react'
import StatField from './StatField'

export default {
    title: 'features/StatField',
    component: StatField,
} as Meta

const Template: StoryFn = (args: any) => <StatField {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Площадь (кв.м)',
    value: '600',
}