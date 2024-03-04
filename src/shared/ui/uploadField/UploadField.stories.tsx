import { Meta, Story } from '@storybook/react'
import UploadField from './UploadField'

export default {
    title: 'UploadField',
    component: UploadField,
} as Meta

const Template: Story = (args: any) => <UploadField {...args} />
export const Default = Template.bind({})
Default.args = {
    name: 'file',
    action: '#',
}
