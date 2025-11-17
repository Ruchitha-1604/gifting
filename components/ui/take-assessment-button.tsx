import React, { useMemo } from 'react'
import { Svg } from '../other'
import { getValuesIdentifierAppLink } from '@/lib/utils';

function TakeAssessmentButton() {

    const appLink = useMemo(() => getValuesIdentifierAppLink(), [])

    return (
        <button onClick={() => window.open(appLink, '_blank')}
            className='group take-the-assessment-btn 
                            rounded-full p-2 pl-3 xl:p-4 xl:pl-6 flex-center gap-[10px] xl:gap-3
                            hover:border-[1.5px] hover:border-[#FFFFFF99]'>
            <span className='text-primary text-[16px] leading-[24px] xl:text-[24px] xl:leading-[36px] 
                            font-helvetica group-hover:text-white'>
                Get Your Report
            </span>
            <span className='!w-10 !h-10 md:!w-14 md:!h-14 rounded-full bg-primary 
                            flex-center group-hover:bg-white'>
                <Svg.Arrow.DiagonalArrow
                    className='!w-4 !h-4 md:!w-6 md:!h-6 text-white group-hover:text-primary' />
            </span>
        </button>
    )
}

export default TakeAssessmentButton