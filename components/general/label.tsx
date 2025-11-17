import { cn } from '@/lib/utils'
import React from 'react'


type LabelProps = { title: string, className?: string, htmlFor?: string }

function Label({ title, className, htmlFor }: LabelProps) {
    return (
        <label htmlFor={htmlFor}
            className={cn("text-[15px] leading-[22.5px] font-helvetica text-[#53585B]", className)}>
            {title}
        </label>
    )
}

export default Label