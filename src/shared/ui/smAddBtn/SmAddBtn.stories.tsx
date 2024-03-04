import { Meta, Story } from '@storybook/react'
import SmAddBtn from './SmAddBtn'

export default {
    title: 'SmAddBtn',
    component: SmAddBtn,
} as Meta

const Template: Story = (args: any) => <SmAddBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Добавить участок',
}
