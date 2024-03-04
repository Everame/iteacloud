import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    title: string
    icon: React.FunctionComponent
    click: () => any
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
                className="font-inter p-[16px] bg-color-secondary text-color-accent text-[14px] rounded-[8px] border-none hover:!bg-color-secondary box-content min-w-[260px] h-[8px] "
            >
                {title}
            </Button>
        </SharedTheme>
    )
}

export default IconTextBtn
