import RightIcon from '#/icons/right.svg?react'
import { Meta, StoryFn } from '@storybook/react'
import CultureSelect from './CultureSelect'

export default {
    title: 'CultureSelect',
    component: CultureSelect,
} as Meta

const Template: StoryFn = (args: any) => <CultureSelect {...args} />
export const Default = Template.bind({})
Default.args = {
    icon: RightIcon,
}
