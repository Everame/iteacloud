import PlusIcon from '#/icons/plus.svg?react'
import { Meta, StoryFn } from '@storybook/react'
import IconTextBtn from './IconTextBtn'

export default {
    title: 'IconTextBtn',
    component: IconTextBtn,
} as Meta

const Template: StoryFn = (args: any) => <IconTextBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Добавить участок',
    icon: PlusIcon,
    click: () => {
        console.log('dd')
    },
}
