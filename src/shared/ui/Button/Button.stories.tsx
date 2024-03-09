import BackIcon from '#/icons/back.svg?react'
import GearIcon from '#/icons/gear.svg?react'
import PlusIcon from '#/icons/plus.svg?react'
import { Meta, StoryFn } from '@storybook/react'
import Button from './Button'

export default {
    title: 'shared/Button',
    component: Button,
} as Meta

const Template: StoryFn = (args: any) => <Button {...args} />

export const IconSettingButton = Template.bind({})
IconSettingButton.args = {
    icon: <GearIcon />,
    className: '!p-2 border rounded-lg box-content h-fit border-accent',
    click: () => {
        console.log('dd')
    },
}

export const IconBackButton = Template.bind({})
IconBackButton.args = {
    icon: <BackIcon />,
    className: '!p-2 border rounded-lg box-content h-fit border-border',
    click: () => {
        console.log('dd')
    },
}

export const IconTextButton = Template.bind({})
IconTextButton.args = {
    icon: <PlusIcon />,
    className:
        'font-inter p-4 bg-secondary text-accent text-s6 rounded-lg border-none hover:!bg-secondary box-content min-w-[260px] h-2 ',
    children: <>Добавить участок</>,
    click: () => {
        console.log('dd')
    },
}

export const AddSite = Template.bind({})
AddSite.args = {
    children: <>Добавить участок</>,
    className: `font-inter font-medium text-s7 rounded px-3 py-4 text-white bg-accent hover:!bg-accent`,
    click: () => {
        console.log('dd')
    },
}

export const MoreDetails = Template.bind({})
MoreDetails.args = {
    children: <>Подробнее</>,
    className:
        'font-inter font-medium text-s7 rounded px-3 py-4 text-accent bg-secondary border-none hover:!bg-secondary',
    click: () => {
        console.log('dd')
    },
}

export const SaveField = Template.bind({})
SaveField.args = {
    children: <>Сохранить поле</>,
    className:
        'font-inter font-medium text-s7 rounded min-w-[260px] p-4 !text-s6 !rounded-lg text-info bg-border border-none hover:!bg-border',
    click: () => {
        console.log('dd')
    },
    disabled: true,
}