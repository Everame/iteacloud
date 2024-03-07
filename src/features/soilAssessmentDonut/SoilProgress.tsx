import Flex from '@/shared/ui/Flex/Flex'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Progress from '@/shared/ui/Progress/Progress'
import Title from '@/shared/ui/Title/Title'

interface Props {
    percent: number
}

const SoilProgress = (props: Props) => {
    const { percent } = props

    return (
        <Flex
            vertical
            gap={32}
            className="p-6 !pb-[55px] shadow-sm rounded-2xl w-[345px]"
        >
            <Flex vertical gap={8} className="!font-inter">
                <Title
                    colorText="#2D3748"
                    level={5}
                    className="!leading-[19px] !font-inter"
                >
                    Общая оценка почвы
                </Title>
                <Paragraph className="!font-medium !text-s6 text-grey500 leading-[17px] !font-inter">
                    В процентах
                </Paragraph>
            </Flex>
            <Progress
                className="text-center !font-inter"
                type="circle"
                status="normal"
                size={150}
                percent={percent}
                strokeColor="#0066FF"
            />
        </Flex>
    )
}

export default SoilProgress
