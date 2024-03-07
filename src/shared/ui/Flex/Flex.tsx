import { Flex as AntFlex, FlexProps } from 'antd'
import { FC } from 'react'

const Flex: FC<FlexProps> = ({ ...props }) => {
    return <AntFlex {...props} />
}

export default Flex
