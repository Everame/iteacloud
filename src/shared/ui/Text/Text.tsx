import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import { FC } from 'react'

const { Text: AntdText } = Typography

const Text: FC<TextProps> = ({ ...props }) => {
    return <AntdText {...props} />
}

export default Text
