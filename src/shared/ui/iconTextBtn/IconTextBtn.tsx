import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    title: string
    icon: React.FunctionComponent
    click: () => void
}

const IconTextBtn = (props: Props) => {
    const { title, icon, click } = props
    const Element = icon
    const Icon: React.FC = () => <Element />
    return (
        <SharedTheme>
            <Button
                onClick={click}
                icon={<Icon />}
                className="font-inter p-4 bg-color-secondary text-color-accent text-s6 rounded-lg border-none hover:!bg-color-secondary box-content min-w-[260px] h-2 "
            >
                {title}
            </Button>
        </SharedTheme>
    )
}

export default IconTextBtn
