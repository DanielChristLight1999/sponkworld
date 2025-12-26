import { balthazar } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

export default function AboutSponk() {
  return (
    <div className='flex flex-col sm:flex-row p-10 sm:p-20 items-start  bg-[#590740]  '>
        <div className='flex w-full gap-4 flex-col'>
            <div className='flex items-center w-full gap-20 2xl:gap-60'>
              <Image className='w-60' src={"/images/sponk-dvd-2.png"} alt="About Sponk" width={300} height={300} />
              <Image className='w-60 transform scale-x-[-1]' src={"/images/sponk-dvd-3.png"} alt="About Sponk" width={300} height={300} />
            </div>
            <div className='w-full'>
                <h2 className='text-[#e381c5] font-bold text-2xl'>Collector's Edition DVD: The BEST of Sponk</h2>
                <p className='text-white text-lg font-bold'>Hilarious bloopers include: Sponk still sleeping. Sponk still drunk, Sponk falls off stage 2, and much more</p>
            </div>
        </div>
        <div className={`text-white w-full flex flex-col gap-6 ${balthazar.className}`}>
            <h1 className={`text-5xl font-[700] text-[#e381c5]`}>Get $SPONK Now on Solana</h1>
            <h3 className='text-3xl text-[#e381c5]'>Total Supply: TBD</h3>

            <h3 className='text-3xl font-bold'>Supply breakdown: TBD</h3>
            <p className='text-xl'>All real community growth</p>

            <p className='text-lg mt-10'>Sponk will be launching as a 100% fair launch using the Equal Pricing Per Mining Round (Fair Distribution) from Premine.fun by Godl</p>
        </div>
    </div>
  )
}
