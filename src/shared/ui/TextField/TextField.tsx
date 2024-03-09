import Flex from '@/shared/ui/Flex/Flex'
import Input from '@/shared/ui/Input/Input'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { ChangeEvent, useState } from 'react'

interface ITextField {
    title?: string
    placeholder?: string
}

export const TextField = (props: ITextField) => {
    const { title, placeholder } = props
    const [value, setValue] = useState('')

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setValue(value)
    }
    return (
        <Flex vertical>
            <div>
                {title && (
                    <Paragraph className="text-info !text-s5 leading-[19px] font-inter font-normal max-w-[600px] !mb-2">
                        {title}
                    </Paragraph>
                )}
                <Input
                    placeholder={placeholder}
                    onChange={handleValueChange}
                    value={value}
                    className="font-inter py-[14px] px-[18px] border-border border rounded-[8px] text-grey800 leading-[19px] h-12 max-w-[600px] font-normal"
                />
            </div>
        </Flex>
    )
}
