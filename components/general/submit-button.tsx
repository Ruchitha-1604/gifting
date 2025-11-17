import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'
import { ThreeDots } from "react-loader-spinner";


type SubmitButtonProps = { loading?: boolean, onClick?: () => void, children: ReactNode, className?: string }

function SubmitButton({ onClick, loading, children, className }: SubmitButtonProps) {
    return (
        <button
            disabled={loading}
            onClick={onClick}
            className={cn('flex-center py-2 px-4 h-12 bg-primary rounded-full font-[Helvetica] text-white text-sm md:text-lg', className)} >
            {loading ? <ThreeDots
                visible={true}
                height="50"
                width="50"
                color="#ffffff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> : children}
        </button >
    )
}

export default SubmitButton