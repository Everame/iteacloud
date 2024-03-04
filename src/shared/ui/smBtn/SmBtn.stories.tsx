import { Meta, StoryFn } from '@storybook/react'
import SmBtn from './SmBtn'

export default {
    title: 'SmBtn',
    component: SmBtn,
} as Meta

const Template: StoryFn = (args: any) => <SmBtn {...args} />
export const AddSite = Template.bind({})
AddSite.args = {
    title: 'Добавить участок',
    click: () => {},
}

export const MoreDetails = Template.bind({})
MoreDetails.args = {
    title: 'Подробнее',
    click: () => {},
}

export const SaveField = Template.bind({})
SaveField.args = {
    title: 'Сохранить поле',
    click: () => {},
}
