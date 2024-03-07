import { Meta, StoryFn } from '@storybook/react'
import Title from './Title'

export default {
    title: 'shared/Title',
    component: Title,
} as Meta

const Template: StoryFn = (args: any) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <div>600</div>,
    className: 'text-color-grey800 font-inter font-bold text-s4',
    level: 4,
}
