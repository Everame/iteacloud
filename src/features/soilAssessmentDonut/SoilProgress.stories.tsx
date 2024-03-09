import { Meta, StoryFn } from '@storybook/react'
import SoilProgress from './SoilProgress'

export default {
    title: 'features/SoilProgress',
    component: SoilProgress,
} as Meta

const Template: StoryFn = (args: any) => <SoilProgress {...args} />
export const Default = Template.bind({})
Default.args = {
    percent: 50,
}
