import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    icon: React.FunctionComponent
    variant: string
    click: () => any
}

const IconBtn = (props: Props) => {
    const { icon, click, variant } = props
    const Element = icon
    const Icon: React.FC = () => <Element />
    let style = ''
    switch (variant) {
        case 'blue':
            style =
                '!p-[8px] border-color-accent border rounded-[8px] box-content h-fit'
            break

        default:
            break
    }
    return (
        <SharedTheme>
            <Button onClick={click} className={style}>
                <Icon />
            </Button>
        </SharedTheme>
    )
}

export default IconBtn
