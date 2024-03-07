import { Upload, UploadProps } from 'antd'
import { FC } from 'react'

const { Dragger: AntDragger } = Upload

const Dragger: FC<UploadProps> = ({ ...props }) => {
    return <AntDragger {...props}></AntDragger>
}

export default Dragger
