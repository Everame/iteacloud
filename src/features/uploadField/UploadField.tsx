import UploadIcon from '#/icons/upload.svg?react'
import { Message } from '@/shared/lib/Message/Message'
import Dragger from '@/shared/ui/Dragger/Dragger'

import { UploadProps } from 'antd'

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
            status === 'done'
                ? Message({
                      type: 'success',
                      content: `${info.file.name} file uploaded successfully.`,
                  })
                : status === 'error'
                  ? Message({
                        type: 'error',
                        content: `${info.file.name} file upload failed.`,
                    })
                  : status === 'removed' &&
                    Message({
                        type: 'success',
                        content: `${info.file.name} file removed successfully.`,
                    })
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files)
        },
    }
    return (
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
    )
}

export default UploadField
