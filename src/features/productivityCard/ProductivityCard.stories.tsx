import { Meta, StoryFn } from '@storybook/react'
import ProductivityCard from './ProductivityCard'

export default {
    title: 'features/ProductivityCard',
    component: ProductivityCard,
} as Meta

const Template: StoryFn = (args: any) => <ProductivityCard {...args} />
export const GrayTheme = Template.bind({})
GrayTheme.args = {
    theme: 'gray',
    title: 'Ожидаемая урожайность',
    percent: 50,
}

export const GreenTheme = Template.bind({})
GreenTheme.args = {
    theme: 'green',
    title: 'Урожайность кукурузы',
    percent: 50,
}
