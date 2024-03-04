import BackIcon from '#/icons/back.svg?react'
import GearIcon from '#/icons/gear.svg?react'
import { Meta, StoryFn } from '@storybook/react'
import IconBtn from './IconBtn'

export default {
    title: 'IconBtn',
    component: IconBtn,
} as Meta

const Template: StoryFn = (args: any) => <IconBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    variant: 'blue',
    icon: GearIcon || BackIcon,
    click: () => {
        console.log('dd')
    },
}
