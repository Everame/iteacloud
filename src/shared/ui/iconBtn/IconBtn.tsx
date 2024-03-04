import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    icon: React.FunctionComponent
    variant: string
    click: () => void
}

const IconBtn = (props: Props) => {
    const { icon, click, variant } = props

    const Element = icon
    const Icon: React.FC = () => <Element />

    let style = ''
    switch (variant) {
        case 'blue':
            style = 'border-color-accent'
            break
        case 'gray':
            style = 'border-color-border'
            break
        default:
            break
    }
    return (
        <SharedTheme>
            <Button
                onClick={click}
                className={`!p-2 border rounded-lg box-content h-fit ${style} `}
            >
                <Icon />
            </Button>
        </SharedTheme>
    )
}

export default IconBtn
