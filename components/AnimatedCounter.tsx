'use client';

import { formatAmount } from '@/lib/utils';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp 
                end={amount}
                duration={2}
                formattingFn={(n: number) => formatAmount(n)}
                />
        </div>
    )
}

export default AnimatedCounter
