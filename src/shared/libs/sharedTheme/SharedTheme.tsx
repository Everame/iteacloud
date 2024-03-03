import { ConfigProvider } from 'antd'

interface MyProps {}

export const SharedTheme = (props: React.PropsWithChildren<MyProps>) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextPlaceholder: '#A0AEC0',
                },
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                    },
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
            {props.children}
        </ConfigProvider>
    )
}
