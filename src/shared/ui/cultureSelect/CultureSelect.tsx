import { Flex, Select, Typography } from 'antd'

interface Props {
    icon: React.FunctionComponent
}

const CultureSelect = (props: Props) => {
    const { icon } = props
    const Element = icon
    const Icon: React.FC = () => <Element />
    return (
        <div>
            <Flex vertical>
                <Typography.Paragraph
                    style={{ marginBottom: '8px' }}
                    className="text-color-info text-[16px] leading-[19px] font-inter font-normal max-w-[600px]"
                >
                    Культура для высадки
                </Typography.Paragraph>
                <Select
                    className="font-inter border-color-border border rounded-[8px] text-color-grey800 leading-[19px] max-w-[600px] h-12 font-normal"
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
        </div>
    )
}

export default CultureSelect
