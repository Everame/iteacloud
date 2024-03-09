import Flex from '@/shared/ui/Flex/Flex'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Select from '@/shared/ui/Select/Select'

interface ICultureSelect {
    icon: React.ElementType
}

const CultureSelect = (props: ICultureSelect) => {
    const { icon } = props
    const Element = icon
    const Icon: React.FC = () => <Element />
    return (
        <Flex vertical>
            <Paragraph className="text-info text-[16px] leading-[19px] font-inter font-normal max-w-[600px] mb-2">
                Культура для высадки
            </Paragraph>
            <Select
                className="font-inter border-border border rounded-[8px] text-grey800 leading-[19px] max-w-[600px] h-12 font-normal"
                defaultValue="Любая"
                suffixIcon=<Icon />
                options={[
                    {
                        label: 'Зерновые',
                        options: [
                            { label: 'Пшеница', value: 'Пшеница' },
                            { label: 'Ячмень', value: 'Ячмень' },
                            { label: 'Овес', value: 'Овес' },
                            { label: 'Рожь', value: 'Рожь' },
                        ],
                    },
                    {
                        label: 'Кормовые',
                        options: [
                            { label: 'Кукуруза', value: 'Кукуруза' },
                            { label: 'Рапс', value: 'Рапс' },
                            { label: 'Соя', value: 'Соя' },
                        ],
                    },
                ]}
            />
        </Flex>
    )
}

export default CultureSelect
