import Flex from '@/shared/ui/Flex/Flex'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Progress from '@/shared/ui/Progress/Progress'
import Title from '@/shared/ui/Title/Title'

interface IEarthProgress {
    title: string
    value: string
    color: string
    percent: number
}

interface IEarthStatus {
    items: IEarthProgress[]
}

const EarthProgress = (props: IEarthProgress) => {
    const { title, value, color } = props
    console.log(color)
    return (
        <Flex align="center" justify="space-between">
            <Flex>
                <div
                    className="w-2 h-2 rounded-full !font-inter mr-2 mt-[3px]"
                    style={{ backgroundColor: color }}
                />
                <Paragraph className="!text-s7 !font-medium !text-grey800 !leading-[14px] !h-[15px] !m-0 !font-inter">
                    {title}
                </Paragraph>
            </Flex>
            <Paragraph className="!font-inter !text-s7 text-grey500 !m-0">
                {value}
            </Paragraph>
        </Flex>
    )
}

const EarthStatus = (props: IEarthStatus) => {
    const { items } = props
    return (
        <Flex gap={24} vertical className="rounded-2xl p-6 shadow-sm w-[626px]">
            <div>
                <Title
                    colorText="#2D3748"
                    level={4}
                    className="!mb-2 !font-bold "
                >
                    Состояние земли
                </Title>
                <Paragraph className="text-grey500 !text-s6 !font-medium !m-0 ">
                    По агрофизическим показателям
                </Paragraph>
            </div>
            <div>
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
