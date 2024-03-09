import Flex from '@/shared/ui/Flex/Flex'
import Progress from '@/shared/ui/Progress/Progress'

interface IData {
    name: string
    uv: number
}

type Props = {
    data: Array<IData>
    colors: Array<string>
}

const RadialChartMultipie = (props: Props) => {
    const { data, colors } = props

    const progressBar = data.map((item, index) => {
        const size = 150 - 25 * index
        const width = 6 - 1 * index
        return (
            <Progress
                type="circle"
                percent={item.uv}
                showInfo={false}
                status="normal"
                strokeLinecap="round"
                size={size}
                strokeWidth={width}
                strokeColor={colors[index].substr(4, 7)}
                trailColor={index == 2 ? 'transparent' : '#EDF2F7'}
                className="absolute -scale-x-[1]"
            />
        )
    })
    const legend = data.map((item, index) => {
        return (
            <Flex gap={8} align="center">
                <div
                    className={`content-[""] h-2 w-2 rounded-full ${colors[index]}`}
                ></div>
                <span className="font-inter text-color-grey800 text-xs font-medium">
                    {item.name} - {item.uv}%
                </span>
            </Flex>
        )
    })
    return (
        <Flex gap={24} vertical align="center">
            <Flex
                align="center"
                justify="center"
                className="relative w-[150px] h-[150px]"
            >
                {progressBar}
            </Flex>
            <Flex gap={16}>{legend}</Flex>
        </Flex>
    )
}

export default RadialChartMultipie
