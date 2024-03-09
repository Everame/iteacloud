import { Meta, StoryFn } from '@storybook/react'
import Paragraph from './Paragraph'

export default {
    title: 'shared/Paragraph',
    component: Paragraph,
} as Meta

const Template: StoryFn = (args: any) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'example',
    className:
        'text-color-info text-[16px] leading-[19px] font-inter font-normal max-w-[600px] !mb-2',
}
