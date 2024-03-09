import { Meta, StoryFn } from '@storybook/react'
import EarthStatus from './EarthStatus'

export default {
    title: 'features/EarthStatus',
    component: EarthStatus,
} as Meta

const Template: StoryFn = (args: any) => <EarthStatus {...args} />
export const Default = Template.bind({})
Default.args = {
    items: [
        {
            percent: 60,
            title: 'Плотность',
            value: '1,1-1,2 г/см3',
            color: '#0066FF',
        },
        {
            percent: 40,
            title: 'Структура',
            value: 'Мелкомковатая, 40%',
            color: '#76ACFB',
        },
        {
            percent: 55,
            title: 'Мощность ПС',
            value: '25-30см',
            color: '#DEEBFC',
        },
    ],
}
