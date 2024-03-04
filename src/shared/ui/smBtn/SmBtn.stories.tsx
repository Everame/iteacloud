import { Meta, Story } from '@storybook/react'
import SmBtn from './SmBtn'

export default {
    title: 'SmBtn',
    component: SmBtn,
} as Meta

const Template: Story = (args: any) => <SmBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Добавить участок',
    click: () => {},
}
