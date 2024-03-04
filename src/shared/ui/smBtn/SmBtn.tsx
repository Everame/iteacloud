import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    title: string
    click: () => void
}

const SmBtn = (props: Props) => {
    const { title, click } = props

    let style = ''
    switch (title) {
        case 'Добавить участок':
            style =
                'px-3 py-4 text-white bg-color-accent hover:!bg-color-accent'
            break
        case 'Подробнее':
            style =
                'px-3 py-4 text-color-accent bg-color-secondary border-none hover:!bg-color-secondary'
            break
        case 'Сохранить поле':
            style =
                'min-w-[260px] p-4 !text-s6 !rounded-lg text-color-info bg-color-border border-none hover:!bg-color-border'
            break
        default:
            break
    }
    return (
        <SharedTheme>
            <Button
                onClick={click}
                className={`font-inter font-medium text-s7 rounded ${style}`}
            >
                {title}
            </Button>
        </SharedTheme>
    )
}

export default SmBtn
