import { Meta, StoryFn } from '@storybook/react'
import StatusField from './StatusField'

export default {
    title: 'StatusField',
    component: StatusField,
} as Meta

const Template: StoryFn = (args: any) => <StatusField {...args} />
export const Default = Template.bind({})
Default.args = {
    status: 'В работе',
}
