import { Flex as AntFlex, FlexProps } from 'antd'
import { FC } from 'react'

const Flex: FC<FlexProps> = ({ className, ...props }) => {
    return <AntFlex {...props} className={className} />
}

export default Flex
