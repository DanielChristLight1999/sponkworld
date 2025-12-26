import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex h-full justify-center py-120 flex-col gap-8 bg-[url(/images/sponk-background.jpg)] bg-cover bg-center items-center'>
        <div>
            <Image className='animate-soft-bounce' src={"/images/sponk.png"} alt="Sponk Hero" width={500} height={500} />
        </div>
        <div>
            <Image src={"/images/sponk-text.png"} alt="Sponk World" width={600} height={600} />
        </div>
        <h3 className='text-3xl max-w-3xl text-center font-black text-white text-shadow-lg'>Sponk follows the adventures of a lovable galago primate who is learning all about the world</h3>
    </div>
  )
}
