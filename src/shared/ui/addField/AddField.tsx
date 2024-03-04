import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'

type Props = {
    click: () => void
}

const AddField = (props: Props) => {
    const { click } = props
    return (
        <SharedTheme>
            <div
                onClick={click}
                className="w-[340px] h-[433px] custom-background relative cursor-pointer hover:shadow-md"
            >
                <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-inter font-medium text-s3 text-color-accent w-[178px]">
                    Добавить поле
                </p>
            </div>
        </SharedTheme>
    )
}

export default AddField
