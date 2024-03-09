import { ConfigProvider, Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import { FC } from 'react'

const { Text: AntdText } = Typography

const Text: FC<TextProps> = ({ className, ...props }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0,
                        fontFamily: 'Inter',
                    },
                },
            }}
        >
            <AntdText {...props} className={className} />
        </ConfigProvider>
    )
}

export default Text
