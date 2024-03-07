import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Title from '@/shared/ui/Title/Title'

export enum ETheme {
    'GRAY' = 'gray',
    'GREEN' = 'green',
}

interface Props {
    title: string
    theme: ETheme
    percent: number
}

const borderColors = {
    gray: '#E2E8F0',
    green: '#66CB9F',
}

const textColors = {
    gray: '#2D3748',
    green: '#66CB9F',
}

const ProductivityCard = (props: Props) => {
    const { theme, percent, title } = props

    const borderColorCls = borderColors[theme]
    const textColorCls = textColors[theme]

    return (
        <div
            className="p-8 w-[344px] shadow-sm rounded-2xl !font-inter"
            style={{ border: `1px solid ${borderColorCls}` }}
        >
            <Title
                colorText="#2D3748"
                level={3}
                className="!font-bold !mb-4 !font-inter"
            >
                {title}
            </Title>
            <Title
                colorText={textColorCls}
                className="!font-bold !text-s1 !font-inter"
            >
                {percent}%
            </Title>
            <div className="w-[280px] h-[1px] bg-border my-4" />
            <Paragraph className="text-grey600 !text-s4 !m-0">
                с учетом площади посева
            </Paragraph>
        </div>
    )
}

export default ProductivityCard
