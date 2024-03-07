import { Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import { FC } from 'react'

const { Title: AntdTitle } = Typography

const Title: FC<TitleProps> = ({ ...props }) => {
    return <AntdTitle {...props} />
}

export default Title
