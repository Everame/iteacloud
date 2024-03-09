import Paragraph from '@/shared/ui/Paragraph/Paragraph'

interface IAddField {
    onClick: () => void
}

const AddField = (props: IAddField) => {
    const { onClick } = props

    return (
        <div
            onClick={onClick}
            className="w-[340px] h-[433px] custom-field-border relative cursor-pointer hover:shadow-md"
        >
            <Paragraph className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 !font-inter !font-medium !text-s3 text-accent w-[178px]">
                Добавить поле
            </Paragraph>
        </div>
    )
}

export default AddField
