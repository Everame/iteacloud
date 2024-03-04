import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'

type Props = {
    status: string
}

const StatusField = (props: Props) => {
    const { status } = props

    let bgColor = ''
    switch (status) {
        case 'В работе':
            bgColor = 'bg-color-halfaccent'
            break
        case 'Законсервировано':
            bgColor = 'bg-color-error'
            break
        case 'Засеяно':
            bgColor = 'bg-color-success'
            break
        case 'Рекультивация':
            bgColor = 'bg-color-warning'
            break
        default:
            break
    }

    return (
        <SharedTheme>
            <div className="w-[200px] px-[22px] py-4">
                <span
                    className={`font-inter font-medium text-s6 text-white ${bgColor} px-3 py-1 rounded`}
                >
                    {status}
                </span>
            </div>
        </SharedTheme>
    )
}

export default StatusField
