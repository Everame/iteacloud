import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import { Button } from 'antd'

type Props = {
    title: string
}

const SmAddBtn = (props: Props) => {
    const { title } = props
    return (
        <SharedTheme>
            <Button className="font-inter px-[12px] py-[16px] bg-color-accent text-white text-[12px] rounded-[4px] ">
                {title}
            </Button>
        </SharedTheme>
    )
}

export default SmAddBtn
