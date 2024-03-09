import { Meta, StoryFn } from '@storybook/react'
import RadialChartMultipie from './radialChartMultipie'

export default {
    title: 'Charts',
    component: RadialChartMultipie,
} as Meta

const Template: StoryFn = (args: any) => <RadialChartMultipie {...args} />
export const Default = Template.bind({})
Default.args = {
    data: [
        {
            name: 'Нитраты',
            uv: 86,
        },
        {
            name: 'Азот',
            uv: 49,
        },
        {
            name: 'Калий',
            uv: 74,
        },
    ],
    colors: ['bg-[#0066FF]', 'bg-[#76ACFB]', 'bg-[#A8CBEE]'],
}
