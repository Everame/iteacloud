import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    title: string
    click: () => any
}

const SmBtn = (props: Props) => {
    const { title, click } = props
    return (
        <SharedTheme>
            <Button
                onClick={click}
                className="font-inter px-[12px] py-[16px] bg-color-accent text-white text-[12px] rounded-[4px] hover:!bg-color-accent "
            >
                {title}
            </Button>
        </SharedTheme>
    )
}

export default SmBtn
