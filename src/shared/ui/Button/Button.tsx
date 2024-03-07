import { Button as AntButton, ButtonProps, ConfigProvider } from 'antd'
import { FC } from 'react'

const Button: FC<ButtonProps> = ({ ...props }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        contentLineHeight: 0,
                        fontWeight: 500,
                        defaultHoverColor: 'none',
                        defaultShadow: 'none',
                    },
                },
            }}
        >
            <AntButton {...props} />
        </ConfigProvider>
    )
}

export default Button
