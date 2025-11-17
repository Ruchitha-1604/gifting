import { cn } from '@/lib/utils'
import React from 'react'

type InputContainerProps = {
    id: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type: string,
    placeholder: string,
    wrapperClassName?: string
    inputClassName?: string,
    disabled?: boolean
}

function InputContainer({ id, name, value, onChange, type, placeholder, wrapperClassName, inputClassName, disabled }: InputContainerProps) {
    return (
        <div className={cn('border border-[#10356533] bg-white h-12 rounded-lg py-2 px-3 flex items-center', wrapperClassName)}>
            <input
                disabled={disabled ? true : false}
                id={id} name={name} type={type} placeholder={placeholder}
                className={cn('w-full outline-none', inputClassName)}
                onChange={onChange} value={value} />
        </div>
    )
}

export default InputContainer