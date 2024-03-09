import { ESpasing } from '@/shared/ui/Enums/Enums'
import Flex from '@/shared/ui/Flex/Flex'
import Text from '@/shared/ui/Text/Text'
import Title from '@/shared/ui/Title/Title'

interface IStatField {
    title?: string
    value?: string
}

const StatField = (props: IStatField) => {
    const { title, value } = props
    return (
        <Flex
            vertical
            gap={ESpasing.GAP2}
            className="p-[24px] rounded-[16px] shadow-sm w-fit"
        >
            <Title colorText="#2D3748" level={4}>
                {title}
            </Title>
            <Text className="text-grey600 !font-medium font-inter !text-s4">
                {value}
            </Text>
        </Flex>
    )
}

export default StatField
