import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type ListCardProps = { className?: string, children: ReactNode }

function ListCard({ className, children }: ListCardProps) {
    return (
        <div className={cn('p-6 xl:p-8 flex flex-col gap-4 xl:gap-6 shadow-cardItem rounded-lg z-[1000] bg-white', className)}>
            {children}
        </div>
    )
}

export default ListCard