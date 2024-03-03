import { useEffect, useState } from 'react'

type Props = {
    title: string
    placeholder: string
}

export const Input = (props: Props) => {
    const { title, placeholder } = props
    const [value, setValue] = useState('')

    useEffect(() => {
        if (value.trim() !== '') {
            const delayDebounceFn = setTimeout(() => {
                setValue(value)
            }, 1500)

            return () => clearTimeout(delayDebounceFn)
        } else {
            setValue('')
        }
    }, [value])

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setValue(value)
    }
    return (
        <div className="inputWrapper">
            <p className="font-inter font-normal text-s5 text-color-info mb-[8px]">
                {title}
            </p>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleValueChange}
                className="px-[18px] py-[14px] outline-none border-color-border border-[1px] rounded-[8px] font-normal font-inter text-s5 text-grey800 w-[100%] max-w-[600px] bg-white leading-[19px]"
            />
        </div>
    )
}
