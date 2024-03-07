import Flex from '@/shared/ui/Flex/Flex'
import Text from '@/shared/ui/Text/Text'
import Title from '@/shared/ui/Title/Title'

type Props = {
    title: string
    value: string
}

const StatField = (props: Props) => {
    const { title, value } = props
    return (
        <Flex
            vertical
            gap={8}
            className="p-[24px] rounded-[16px] shadow-sm w-fit"
        >
            <Title
                level={4}
                className="text-color-grey800 font-inter font-bold text-s4"
            >
                {title}
            </Title>
            <Text className="text-color-grey600 font-medium font-inter text-[18px]">
                {value}
            </Text>
        </Flex>
    )
}

export default StatField
