import { Progress as AntProgress, ProgressProps } from 'antd'
import { FC } from 'react'

const Progress: FC<ProgressProps> = ({ ...props }) => {
    return <AntProgress {...props} />
}

export default Progress
