import { cn } from '@/lib/utils'
import React from 'react'
import { Input as Props } from './types'

const InputBox: React.FC<Props> = (props) => {
    const { wrapperClassName, className, placeholder, type, value, onChange, onChangeText, ...otherProps } = props;
    return (
        <div className={cn('border border-[#696F7233] h-[56px] p-5 rounded-lg flex-center', wrapperClassName)}>
            {type ? <input
                type={type}
                className={cn(
                    "w-full outline-none border-none placeholder:text-[#9EA7AB] font-normal font-helvetica text-[16px] leading-[24px] xl:text-[18px] xl:leading-[27px] text-primary-text",
                    className
                )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...otherProps}
            /> :
                <textarea
                    rows={5}
                    value={value}
                    onChange={onChangeText}
                    className='resize-none w-full outline-none'
                    placeholder={placeholder}></textarea>
            }
        </div>
    )
}

export default InputBox