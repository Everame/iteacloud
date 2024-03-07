import { Meta, StoryFn } from '@storybook/react'
import Text from './Text'

export default {
    title: 'shared/Text',
    component: Text,
} as Meta

const Template: StoryFn = (args: any) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <div>Площадь (га)</div>,
    className: 'text-color-grey600 font-medium font-inter text-[18px]',
}
