import { Meta, Story } from '@storybook/react'
import GearIcon from '#/icons/gear.svg?react'
import IconBtn from './IconBtn'

export default {
    title: 'IconBtn',
    component: IconBtn,
} as Meta

const Template: Story = (args: any) => <IconBtn {...args} />
export const Default = Template.bind({})
Default.args = {
    variant: 'blue',
    icon: GearIcon,
    click: () => {
        console.log('dd')
    },
}
