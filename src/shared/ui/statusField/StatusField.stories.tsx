import { Meta, StoryFn } from '@storybook/react'
import StatusField from './StatusField'

export default {
    title: 'StatusField',
    component: StatusField,
} as Meta

const Template: StoryFn = (args: any) => <StatusField {...args} />
export const InProgress = Template.bind({})
InProgress.args = {
    status: 'В работе',
}

export const Canned = Template.bind({})
Canned.args = {
    status: 'Законсервировано',
}
export const Seeded = Template.bind({})
Seeded.args = {
    status: 'Засеяно',
}

export const Reclamation = Template.bind({})
Reclamation.args = {
    status: 'Рекультивация',
}