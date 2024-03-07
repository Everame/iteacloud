import { cn } from '@/shared/lib/Cn/Cn'
import Text from '@/shared/ui/Text/Text'

type IStatusField = {
    status?: string
    className?: string
}

const StatusField = (props: IStatusField) => {
    const { status, className } = props

    return (
        <div className="w-[200px] px-[22px] py-4">
            <Text
                className={cn(
                    `font-inter font-medium text-s6 text-white px-3 py-1 rounded`,
                    className
                )}
            >
                {status}
            </Text>
        </div>
    )
}

export default StatusField
