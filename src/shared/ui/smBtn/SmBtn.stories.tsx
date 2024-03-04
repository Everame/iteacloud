import { Meta, StoryFn } from '@storybook/react'
import SmBtn from './SmBtn'

export default {
    title: 'SmBtn',
    component: SmBtn,
} as Meta

const Template: StoryFn = (args: any) => <SmBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Добавить участок',
    click: () => {},
}
