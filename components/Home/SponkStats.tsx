import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import Image from 'next/image'
import { balthazar } from '@/app/layout'

export default function SponkStats() {
  return (
    <div className='flex bg-[#f0f0f0] p-20'>
        <div className='w-full flex flex-col gap-4'>
            <Image className='rounded rounded-lg' src={"/images/sponk-on-stage.gif"} width={500} height={500} alt='sponk on stage' />
            <h3 className='text-xl font-semibold text-[#555555]'>Sponk is now touring. See Sponk live!</h3>
        </div>
        <div className='text-[#444444] flex flex-col gap-6'>
            <h1 className={`${balthazar.className} font-bold text-5xl `}>Enjoy Sponk</h1>
            <h3 className='text-2xl font-bold'>Stage 1: Spread SPONK everywhere!</h3>
            <h3 className='text-2xl font-bold'>Sponk will tour many DEXs, CEXs and DeFi applications.</h3>

            <h2 className='text-3xl font-bold'>Current stats:</h2>
            <div className={`flex items-center text-center gap-6 font-bold justify-between w-full text-[#555555] ${balthazar.className}`}>
                <Card className='w-full'>
                    <CardTitle className='text-3xl'>0</CardTitle>
                    <CardContent className='text-xl'>Holders</CardContent>
                </Card>
                <Card className='w-full'>
                    <CardTitle className='text-3xl'>0</CardTitle>
                    <CardContent className='text-xl'>Integrations</CardContent>
                </Card>
                <Card className='w-full'>
                    <CardTitle className='text-3xl'>1</CardTitle>
                    <CardContent className='text-xl'>Chain</CardContent>
                </Card>
            </div>
            <h1 className='font-bold text-4xl'> The FUN never ends with SPONK!</h1>
            <p className='text-xl font-semibold'>After 25 years, Sponk is still a children's favorite. See Sponk live in person!</p>
            <p className='text-lg/6 font-medium'>* Fun may be relative to you and your personal situation. There is no guarantee when the fun will start or end, or whether it will be fun at all. Sponk may leave any show at any time. Refunds will note be provided.</p>

        </div>
    </div>
  )
}
