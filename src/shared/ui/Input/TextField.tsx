import { useState } from 'react'
import { Flex, Input, Typography } from 'antd'
import { SharedTheme } from '../../libs/sharedTheme/SharedTheme'

type Props = {
    title: string
    placeholder: string
}

export const TextField = (props: Props) => {
    const { title, placeholder } = props
    const [value, setValue] = useState('')

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setValue(value)
    }
    return (
        <SharedTheme>
            <Flex vertical gap={16}>
                <div>
                    <Typography.Paragraph
                        style={{ marginBottom: '8px' }}
                        className="text-color-info text-[16px] leading-[19px] font-inter font-normal max-w-[600px]"
                    >
                        {title}
                    </Typography.Paragraph>
                    <Input
                        placeholder={placeholder}
                        onChange={handleValueChange}
                        value={value}
                        className="font-inter py-[14px] px-[18px] border-color-border border rounded-[8px] text-color-grey800 leading-[19px] max-w-[600px] font-normal"
                    />
                </div>
            </Flex>
        </SharedTheme>
    )
}
