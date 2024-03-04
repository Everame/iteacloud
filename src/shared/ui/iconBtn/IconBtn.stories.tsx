import BackIcon from '#/icons/back.svg?react'
import GearIcon from '#/icons/gear.svg?react'
import { Meta, StoryFn } from '@storybook/react'
import IconBtn from './IconBtn'

export default {
    title: 'IconBtn',
    component: IconBtn,
} as Meta

const Template: StoryFn = (args: any) => <IconBtn {...args} />
export const Gear = Template.bind({})
Gear.args = {
    variant: 'blue',
    icon: GearIcon,
    click: () => {
        console.log('dd')
    },
}

export const Back = Template.bind({})
Back.args = {
    variant: 'gary',
    icon: BackIcon,
    click: () => {
        console.log('dd')
    },
}
