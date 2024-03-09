import { ESpacing } from '@/shared/ui/Enums/Enums'
import Flex from '@/shared/ui/Flex/Flex'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Progress from '@/shared/ui/Progress/Progress'
import Title from '@/shared/ui/Title/Title'

interface ISoilProgress {
    percent: number
}

const SoilProgress = (props: ISoilProgress) => {
    const { percent } = props

    return (
        <Flex
            vertical
            gap={ESpacing.VALUE8}
            className="p-6 !pb-[55px] shadow-sm rounded-2xl w-[345px]"
        >
            <Flex vertical gap={ESpacing.VALUE2} className="!font-inter">
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
