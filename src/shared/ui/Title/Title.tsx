import { cn } from '@/shared/lib/Cn/Cn'
import { ConfigProvider, Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import { FC } from 'react'

const { Title: AntdTitle } = Typography

interface ITitleProps extends TitleProps {
    colorText?: string
    className?: string
}

const Title: FC<ITitleProps> = ({ colorText, className, ...props }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: colorText,
                    fontWeightStrong: 700,
                    fontSizeHeading1: 36,
                    fontSizeHeading2: 32,
                    fontSizeHeading3: 24,
                    fontSizeHeading4: 18,
                    fontSizeHeading5: 16,
                },
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0,
                        fontFamily: 'Inter',
                    },
                },
            }}
        >
            <AntdTitle {...props} className={cn(className)} />
        </ConfigProvider>
    )
}

export default Title
