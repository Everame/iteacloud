import UploadIcon from '#/icons/upload.svg?react'
import { Message } from '@/shared/lib/Message/Message'
import Dragger from '@/shared/ui/Dragger/Dragger'
import Flex from '@/shared/ui/Flex/Flex'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import { UploadProps } from 'antd'

type IUploadField = {
    name?: string
    action?: string
}

const UploadField = (props: IUploadField) => {
    const { name, action } = props
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
        <Flex vertical align="flex-start" gap={8} className="max-w-[600px]">
            <Dragger {...args} className="bg-transparent w-full">
                <Paragraph className="ant-upload-drag-icon justify-center flex !mb-[7px]">
                    <UploadIcon />
                </Paragraph>
                <Paragraph className="ant-upload-text !text-[12px] font-inter !text-grey600 leading-[15px] h-fit !mb-0">
                    Перенесите файл сюда или
                </Paragraph>
                <Paragraph className="ant-upload-text !text-[12px] font-inter !text-halfaccent leading-[15px] h-fit !mb-0">
                    Откройте проводник
                </Paragraph>
            </Dragger>
            <p className="ant-upload-hint !text-[10px] font-inter !text-grey500 leading-[12px] h-fit">
                Прикрепите файл в формате .pdf
            </p>
        </Flex>
    )
}

export default UploadField
