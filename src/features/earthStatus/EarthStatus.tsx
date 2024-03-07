import Flex from '@/shared/ui/Flex/Flex'
import Progress from '@/shared/ui/Progress/Progress'

interface ProgressItem {
    title: string
    value: string
    color: string
    percent: number
}

interface Props {
    items: ProgressItem[]
}

const EarthProgress = (props: ProgressItem) => {
    const { title, value, color } = props
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div
                    className="w-2 h-2 rounded-full } mr-2 mt-0.5"
                    style={{ backgroundColor: color }}
                />
                <p className="text-s7 font-medium text-color-grey800 leading-[14px] h-[15px]">
                    {title}
                </p>
            </div>
            <p className="text-s7 font-medium text-color-grey500">{value}</p>
        </div>
    )
}

const EarthStatus = (props: Props) => {
    const { items } = props
    return (
        <Flex
            gap={24}
            vertical
            className="rounded-2xl p-6 font-inter shadow-sm w-[626px]"
        >
            <div>
                <h5 className="text-s5 font-bold mb-2">Состояние земли</h5>
                <p className="text-color-grey500 text-s6">
                    По агрофизическим показателям
                </p>
            </div>
            <div className="font-inter">
                {items.map((item, index) => (
                    <div key={index}>
                        <EarthProgress {...item} />
                        <Progress
                            status="normal"
                            strokeColor={item.color}
                            percent={item.percent}
                            showInfo={false}
                            className={index === items.length - 1 ? '' : 'mb-6'}
                        />
                    </div>
                ))}
            </div>
        </Flex>
    )
}

export default EarthStatus
