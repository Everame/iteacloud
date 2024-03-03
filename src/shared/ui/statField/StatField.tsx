import { Flex, Typography } from 'antd'
import { SharedTheme } from '../../libs/sharedTheme/SharedTheme'

type Props = {
    title: string
    value: string
}

const StatField = (props: Props) => {
    const { title, value } = props
    return (
        <SharedTheme>
            <Flex
                vertical
                gap={8}
                className="p-[24px] rounded-[16px] shadow-sm w-fit"
            >
                <Typography.Title
                    level={4}
                    style={{ fontWeight: 700, fontSize: '18px' }}
                    className="text-color-grey800 font-inter"
                >
                    {title}
                </Typography.Title>
                <Typography.Text className="text-color-grey600 font-medium font-inter text-[18px]">
                    {value}
                </Typography.Text>
            </Flex>
        </SharedTheme>
    )
}

export default StatField
