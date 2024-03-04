import { SharedTheme } from '@/shared/libs/sharedTheme/SharedTheme'
import UploadIcon from '#/icons/upload.svg?react'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'

const { Dragger } = Upload

type Props = {
    name: string
    action: string
}

const UploadField = (props: Props) => {
    const { name, action } = props
    const Icon: React.FC = () => <UploadIcon />
    const args: UploadProps = {
        name: name,
        multiple: false,
        action: action,
        onChange(info) {
            const { status } = info.file
            if (status !== 'uploading') {
                console.log(info.file, info.fileList)
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files)
        },
    }
    return (
        <SharedTheme>
            <div className="flex flex-col content-start gap-y-[8px]">
                <Dragger {...args} className="bg-transparent">
                    <p className="ant-upload-drag-icon justify-center flex !mb-[7px]">
                        <Icon />
                    </p>
                    <p className="ant-upload-text !text-[12px] font-inter !text-color-grey600 leading-[15px] h-fit !mb-0 ">
                        Перенесите файл сюда или
                    </p>
                    <p className="ant-upload-text !text-[12px] font-inter !text-color-halfaccent leading-[15px] h-fit !mb-0 ">
                        Откройте проводник
                    </p>
                </Dragger>
                <p className="ant-upload-hint !text-[10px] font-inter !text-color-grey500 leading-[12px] h-fit">
                    Прикрепите файл в формате .pdf
                </p>
            </div>
        </SharedTheme>
    )
}

export default UploadField
