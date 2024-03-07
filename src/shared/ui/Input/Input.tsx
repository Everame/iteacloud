import { Input as AntInput, ConfigProvider, InputProps } from 'antd'
import { FC } from 'react'

const Input: FC<InputProps> = ({ ...props }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextPlaceholder: '#A0AEC0',
                },
                components: {
                    Input: {
                        inputFontSize: 16,
                        activeBorderColor: '#E2E8F0',
                        hoverBorderColor: '#E2E8F0',
                        activeShadow: 'none',
                        errorActiveShadow: 'none',
                    },
                },
            }}
        >
            <AntInput {...props} />
        </ConfigProvider>
    )
}

export default Input
