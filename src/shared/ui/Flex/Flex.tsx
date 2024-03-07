import { cn } from '@/shared/lib/Cn/Cn'
import { Flex as AntFlex, FlexProps } from 'antd'
import { FC } from 'react'

const Flex: FC<FlexProps> = ({ className, ...props }) => {
    return <AntFlex {...props} className={cn(className)} />
}

export default Flex
