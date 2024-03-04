import { Meta, Story } from '@storybook/react'
import PlusIcon from '#/icons/plus.svg?react'
import IconTextBtn from './IconTextBtn'

export default {
    title: 'IconTextBtn',
    component: IconTextBtn,
} as Meta

const Template: Story = (args: any) => <IconTextBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Добавить участок',
    icon: PlusIcon,
    click: () => {
        console.log('dd')
    },
}
