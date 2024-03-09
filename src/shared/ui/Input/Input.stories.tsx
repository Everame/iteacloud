import { Meta, StoryFn } from '@storybook/react'
import { Input } from 'antd'

export default {
    title: 'shared/Input',
    component: Input,
} as Meta

const Template: StoryFn = (args: any) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Площадь участка, га',
    placeholder: 'Например, 600',
    className:
        'font-inter py-[14px] px-[18px] border-color-border border rounded-[8px] text-color-grey800 leading-[19px] h-12 max-w-[600px] font-normal',
}
