type Props = {
    status: string
    className: string
}

const StatusField = (props: Props) => {
    const { status, className } = props

    return (
        <div className="w-[200px] px-[22px] py-4">
            <span
                className={`font-inter font-medium text-s6 text-white ${className} px-3 py-1 rounded`}
            >
                {status}
            </span>
        </div>
    )
}

export default StatusField
