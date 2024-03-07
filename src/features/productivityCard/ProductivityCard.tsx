type Theme = 'gray' | 'green'

interface Props {
    title: string
    theme: Theme
    percent: number
}

const borderColors = {
    gray: '#E2E8F0',
    green: '#66CB9F',
}

const textColors = {
    gray: 'text-color-grey800',
    green: 'text-color-success',
}

const ProductivityCard = (props: Props) => {
    const { theme, percent, title } = props

    const borderColorCls = borderColors[theme]
    const textColorCls = textColors[theme]

    return (
        <div
            className="p-8 w-[344px] shadow-sm rounded-2xl font-inter"
            style={{ border: `1px solid ${borderColorCls}` }}
        >
            <h3 className=" font-bold text-s3 text-color-grey800 mb-4">
                {title}
            </h3>
            <h1 className={` ${textColorCls}  font-bold text-s1`}>
                {percent}%
            </h1>
            <div className="w-[280px] h-[1px] bg-color-border my-4" />
            <p className="text-color-grey600 text-s4">
                с учетом площади посева
            </p>
        </div>
    )
}

export default ProductivityCard
