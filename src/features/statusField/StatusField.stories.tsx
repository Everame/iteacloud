import { Meta, StoryFn } from '@storybook/react'
import StatusField from './StatusField'

export default {
    title: 'features/StatusField',
    component: StatusField,
} as Meta

const Template: StoryFn = (args: any) => <StatusField {...args} />
export const InProgress = Template.bind({})
InProgress.args = {
    className: 'bg-color-halfaccent',
    status: 'В работе',
}

export const Canned = Template.bind({})
Canned.args = {
    className: 'bg-color-error',
    status: 'Законсервировано',
}
export const Seeded = Template.bind({})
Seeded.args = {
    className: 'bg-color-success',
    status: 'Засеяно',
}

export const Reclamation = Template.bind({})
Reclamation.args = {
    className: 'bg-color-warning',
    status: 'Рекультивация',
}
