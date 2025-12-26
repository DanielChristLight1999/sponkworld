import { balthazar } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

export default function WhoisSponk() {
    return (
        <div className='flex flex-col text-center items-center p-20 gap-6'>
            <Image src={"/images/sponk-eyes-icon.png"} alt="Who is Sponk?" width={150} height={150} />
            <div className='flex w-full justify-end'>
                <p>ABOUT SPONK</p>
            </div>
            <h1 className={`${balthazar.className} font-bold text-5xl`}>Who is Sponk?</h1>
            <p className='text-[#e381c5] text-3xl'>Sponk, now 37, is an ex-child star, famous for playing himself in the two-time award winning, hit 1990s self-titled TV show, Sponk!</p>

            <p className='text-xl text-[#888888]'>Parental Note: Sponk is moving beyond a phase of denegerate gambling and strife, pursuing a path of reform. We ask that you respect his commitment to sobriety at this time. Live appearances may not be suitable for all audiences.</p>
        </div>
    )
}
