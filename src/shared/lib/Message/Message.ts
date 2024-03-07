import { MessageArgsProps, message } from 'antd'

export const Message = (props: MessageArgsProps) => {
    switch (props.type) {
        case 'success':
            message.success(props.content)
            break
        case 'info':
            message.info(props.content)
            break
        case 'warning':
            message.warning(props.content)
            break
        case 'error':
            message.error(props.content)
            break
        case 'loading':
            message.loading(props.content)
            break
    }
}
