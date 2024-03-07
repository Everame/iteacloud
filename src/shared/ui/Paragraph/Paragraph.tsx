import { cn } from '@/shared/lib/Cn/Cn'
import { ConfigProvider, Typography } from 'antd'
import { ParagraphProps } from 'antd/es/typography/Paragraph'
import { FC } from 'react'

const { Paragraph: AntParagraph } = Typography

const Paragraph: FC<ParagraphProps & React.RefAttributes<HTMLElement>> = ({
    className,
    ...props
}) => {
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
            <AntParagraph {...props} className={cn(className)} />
        </ConfigProvider>
    )
}

export default Paragraph
