import Flex from '@/shared/ui/Flex/Flex'
import Progress from '@/shared/ui/Progress/Progress'

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
            <Flex vertical gap={8} className="font-inter">
                <h5 className="font-bold text-s5 leading-[19px]">
                    Общая оценка почвы
                </h5>
                <p className="font-medium text-s6 text-color-grey500 leading-[17px]">
                    В процентах
                </p>
            </Flex>
            <Progress
                className="text-center"
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
