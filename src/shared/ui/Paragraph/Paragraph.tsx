import { ConfigProvider, Typography } from 'antd'
import { ParagraphProps } from 'antd/es/typography/Paragraph'
import { FC } from 'react'

const { Paragraph: AntParagraph } = Typography

const Paragraph: FC<ParagraphProps & React.RefAttributes<HTMLElement>> = ({
    ...props
}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                    },
                },
            }}
        >
            <AntParagraph {...props} />
        </ConfigProvider>
    )
}

export default Paragraph
